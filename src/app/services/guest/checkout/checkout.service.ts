import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from "../../../../environments/environment";
import {IInstallment, IProduct} from '../../../interfaces/IProduct';
import {IDiscount} from '../../../interfaces/IDiscount';
import {AppComponent} from '../../../app.component';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
    private productsQuantitySubject: Subject<number> = new Subject<number>();
    private browser: boolean;

    constructor(private httpClient: HttpClient) {
        AppComponent.isBrowser.subscribe(isBrowser => {
            this.browser = isBrowser;
        });
    }

    public get products(): Array<IProduct> {
        if (!this.browser) {
            return [];
        }
        const parsed = JSON.parse(localStorage.getItem('chart_products'));
        return parsed ? parsed : [];
    }

    public set products(products: Array<IProduct>) {
        if (!this.browser) {
            return;
        }
        localStorage.removeItem('shipping');
        localStorage.setItem('chart_products', JSON.stringify(products));
        this.shippingOption = null;
        this.updateProductsQuantity();
    }

    public get discounts(): Array<IDiscount> {
        if (!this.browser) {
            return [];
        }
        const parsed = JSON.parse(localStorage.getItem('discounts'));
        return parsed ? parsed : [];
    }

    public set discounts(products: Array<IDiscount>) {
        if (!this.browser) {
            return;
        }
        localStorage.removeItem('discounts');
        localStorage.setItem('discounts', JSON.stringify(products));
    }

    public set shipping(shipping: any) {
        if (!this.browser) {
            return;
        }
        localStorage.setItem('shipping', JSON.stringify(shipping));
    }

    public get shipping() {
        if (!this.browser) {
            return;
        }
        const parsed = JSON.parse(localStorage.getItem('shipping'));
        return parsed ? parsed : [];
    }

    public set postalCode(postalCode: string) {
        if (!this.browser) {
            return;
        }
        localStorage.removeItem('postal_code');
        if (postalCode) {
            localStorage.setItem('postal_code', postalCode);
        }
    }

    public get postalCode(): string {
        if (!this.browser) {
            return;
        }
        return localStorage.getItem('postal_code');
    }

    public set discount(discount: IDiscount) {
        if (!this.browser) {
            return;
        }
        localStorage.setItem('discount', JSON.stringify(discount));
    }

    public get discount(): IDiscount {
        if (!this.browser) {
            return;
        }
        return JSON.parse(localStorage.getItem('discount'));
    }

    public set shippingOption(shippingOption: any) {
        if (!this.browser) {
            return;
        }
        if (shippingOption) {
            localStorage.setItem('shipping_option', JSON.stringify(shippingOption));
        } else {
            localStorage.removeItem('shipping_option');
        }
    }

    public get shippingOption() {
        if (!this.browser) {
            return;
        }
        return JSON.parse(localStorage.getItem('shipping_option'));
    }

    public clear() {
        this.products = [];
        this.shippingOption = null;
        this.postalCode = '';
        this.shipping = null;
        this.updateProductsQuantity();
        this.discount = null;
    }

    public get total(): number {
        let total = this.subTotalWithDiscount;
        if (this.shippingOption) {
            total += +this.shippingOption?.price;
        } else {
            total += +this.bestShipping?.price;
        }
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
        this.discounts?.forEach(discount => total = total - discount.value)
        return total;
    }

    public add(product: IProduct): void {
        const productFound = this.products.findIndex(findProduct =>
            findProduct.id === product.id &&
            findProduct.selected_options.map(option => option.id).toString() === product.selected_options.map(option => option.id).toString());
        if (productFound >= 0) {
            const products = this.products;
            let price = products[productFound].price;
            products[productFound].selected_options.forEach(option => price += (option.type ? +option.price : -option.price))
            products[productFound].quantity += 1;
            products[productFound].option_price = price;
            products[productFound].total_price = products[productFound].option_price * products[productFound].quantity;
            this.products = products;
            return;
        }
        product.quantity = 1;
        let price = product.price;
        product.selected_options.forEach(option => price += (option.type ? option.price : -option.price))
        product.option_price = price;
        product.total_price = price;
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
        const discount = this.discount?.code;
        return this.httpClient.post<any>(environment.baseSiteUrl + '/checkout/payment', {
            card,
            products,
            shipping_option_id,
            discount
        });
    }

	public paymentPix() {
        const products = this.products.map(product => {
            return { id: product.id, quantity: product.quantity, options: product.selected_options.map(option => option.id) }
        });
        const shipping_option_id = this.shippingOption.id;
        const discount = this.discount?.code;
        return this.httpClient.post<any>(environment.baseSiteUrl + '/checkout/pix', {
            products,
            shipping_option_id,
            discount
        });
	}

    public discountCode(discountCode: string) {
        return this.httpClient.post<any>(environment.baseSiteUrl + '/checkout/discount_code', { discount_code: discountCode });
    }

    public applyDiscount(discount: IDiscount) {
        this.discount = discount;
    }

    public get installments(): Array<IInstallment> {
        const installments = [];
        for (let i = 1; i <= 12; i++) {
            installments.push({
                price: this.total / i,
                total: this.total,
                installment: i
            })
        }
        return installments;
    }

    public get bestShipping(): any {
        let bestShipping;
        let price = -1;
        this.shipping?.forEach(shipping => {
            if (+shipping.price < price || price == -1) {
                bestShipping = shipping;
            }
        })
        return bestShipping;
    }
}