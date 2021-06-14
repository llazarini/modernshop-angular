import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from "../../../../environments/environment";
import {IProduct} from '../../../interfaces/IProduct';
import {IDiscount} from '../../../interfaces/IDiscount';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
    private productsQuantitySubject: Subject<number> = new Subject<number>();

    constructor(private httpClient: HttpClient) { }

    public get products(): Array<IProduct> {
        const parsed = JSON.parse(sessionStorage.getItem('chart_products'));
        return parsed ? parsed : [];
    }

    public set products(products: Array<IProduct>) {
        sessionStorage.removeItem('shipping');
        sessionStorage.setItem('chart_products', JSON.stringify(products));
        this.shippingOption = null;
        this.updateProductsQuantity();
    }

    public set shipping(shipping: any) {
        sessionStorage.setItem('shipping', JSON.stringify(shipping));
    }

    public get shipping() {
        const parsed = JSON.parse(sessionStorage.getItem('shipping'));
        return parsed ? parsed : [];
    }

    public set postalCode(postalCode: string) {
        sessionStorage.setItem('postal_code', postalCode);
    }

    public get postalCode() {
        return sessionStorage.getItem('postal_code');
    }

    public set discount(discount: IDiscount) {
        sessionStorage.setItem('discount', JSON.stringify(discount));
    }

    public get discount(): IDiscount {
        return JSON.parse(sessionStorage.getItem('discount'));
    }

    public set shippingOption(shippingOption: any) {
        sessionStorage.setItem('shipping_option', JSON.stringify(shippingOption));
    }

    public get shippingOption() {
        console.log(JSON.parse(sessionStorage.getItem('shipping_option')));
        return JSON.parse(sessionStorage.getItem('shipping_option'));
    }

    public clear() {
        this.products = [];
        this.shippingOption = null;
        this.postalCode = '';
        this.shipping = null;
        this.updateProductsQuantity();
    }

    public get total(): number {
        let total = this.subTotal;
        total += +this.shippingOption?.price;
        return total;
    }

    public get subTotal(): number {
        let total = 0;
        this.products.forEach(product => {
            let price = product.price;
            product.selected_options.forEach(option => price += (option.type ? option.price : -option.price))
            total += price * product.quantity;
        })
        return total;
    }

    public get subTotalWithDiscount(): number {
        let total = this.subTotal;
        if (this.discount) {
            total = this.discount.type === 'percentage' ? total * (1 - (this.discount.value / 100)) : total - this.discount.value;
        }
        return total;
    }

    public add(product: IProduct): void {
        const productFound = this.products.findIndex(findProduct =>
            findProduct.id === product.id &&
            findProduct.selected_options.map(option => option.id).toString() === product.selected_options.map(option => option.id).toString());
        if (productFound >= 0) {
            const products = this.products;
            products[productFound].quantity += 1;
            products[productFound].total_price = product.price * this.products[productFound].quantity;
            this.products = products;
            return;
        }
        product.quantity = 1;
        product.total_price = product.price;
        const products = this.products;
        products.push(product);
        this.products = products;
        this.updateProductsQuantity();
        this.shippingOption = null;
    }

    public remove(product: IProduct): void {
        this.products.push(product);
        this.updateProductsQuantity();
        this.shippingOption = null;
    }

    public get quantity(): number {
        let quantity = 0;
        this.products.forEach(product => quantity += product.quantity)
        return quantity;
    }

    public exists(email: string): Observable<boolean> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('email', email);
        return this.httpClient.get<boolean>(environment.baseSiteUrl + '/checkout/basic', {
            params: httpParams
        });
    }

    public shipment(postalCode: string, products: Array<IProduct>) {
        const shipments = products.map(product => {
            return { id: product.id, options: product.selected_options.map(option => option.id), quantity: product.quantity ? product.quantity : 1 }
        })
        return this.httpClient.post<any>(environment.baseSiteUrl + '/checkout/shipment', { postal_code: postalCode, products: shipments });
    }

    public productsQuantity(): Observable<number> {
        return this.productsQuantitySubject.asObservable();
    }

    private updateProductsQuantity() {
        this.productsQuantitySubject.next(this.quantity);
    }

    public paymentCreditCard(card: any): Observable<any> {
        const products = this.products.map(product => {
            return { id: product.id, quantity: product.quantity, options: product.selected_options.map(option => option.id) }
        });
        const shipping_option_id = this.shippingOption.id;
        return this.httpClient.post<any>(environment.baseSiteUrl + '/checkout/payment', {
            card,
            products,
            shipping_option_id
        });
    }

	public paymentPix() {
        const products = this.products.map(product => {
            return { id: product.id, quantity: product.quantity, options: product.selected_options.map(option => option.id) }
        });
        const shipping_option_id = this.shippingOption.id;
        return this.httpClient.post<any>(environment.baseSiteUrl + '/checkout/pix', {
            products,
            shipping_option_id
        });
	}

    public discountCode(discountCode: string) {
        return this.httpClient.post<any>(environment.baseSiteUrl + '/checkout/discount_code', { discount_code: discountCode });
    }

    public applyDiscount(discount: IDiscount) {
        this.discount = discount;
    }
}