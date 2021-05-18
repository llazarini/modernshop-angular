import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from "../../../../environments/environment";
import {IProduct} from '../../../interfaces/IProduct';

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

    public set shippingOption(shippingOption: any) {
        sessionStorage.setItem('shipping_option', JSON.stringify(shippingOption));
    }

    public get shippingOption() {
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
        this.products.forEach(product => total = product.total_price + (product.selected_option.type ? product.selected_option.price : -product.selected_option.price))
        return total;
    }

    public add(product: IProduct): void {
        const productFound = this.products.findIndex(findProduct =>
            findProduct.id === product.id &&
            findProduct.selected_option?.id === product.selected_option?.id);
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
    }

    public remove(product: IProduct): void {
        this.products.push(product);
        this.updateProductsQuantity();
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
            return { id: product.id, option_id: product.selected_option?.id, quantity: product.quantity ? product.quantity : 1 }
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
            return { id: product.id, quantity: product.quantity, option_id: product.selected_option?.id }
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
            return { id: product.id, quantity: product.quantity, option_id: product.selected_option?.id }
        });
        const shipping_option_id = this.shippingOption.id;
        return this.httpClient.post<any>(environment.baseSiteUrl + '/checkout/pix', {
            products,
            shipping_option_id
        });
	}
}