import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IBanner} from '../../../interfaces/IBanner';
import {IProduct} from '../../../interfaces/IProduct';
import {IResponse} from '../../../interfaces/IResponse';
import {IUser} from '../../../interfaces/IUser';
import {IAddress} from '../../../interfaces/IAddress';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
    constructor(private httpClient: HttpClient) { }

    public get products(): Array<IProduct> {
        const parsed = JSON.parse(sessionStorage.getItem('chart_products'));
        return parsed ? parsed : [];
    }

    public set products(products: Array<IProduct>) {
        sessionStorage.setItem('chart_products', JSON.stringify(products));
    }

    public add(product: IProduct): void {
        const productFound = this.products.findIndex(findProduct => findProduct.id === product.id);
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
    }

    public remove(product: IProduct): void {
        this.products.push(product);
    }

    public exists(email: string): Observable<boolean> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('email', email);
        return this.httpClient.get<boolean>(environment.baseSiteUrl + '/checkout/basic', {
            params: httpParams
        });
    }

    public create(user: IUser): Observable<any> {
        return this.httpClient.post<any>(environment.baseSiteUrl + '/checkout/create', user);
    }

    public address(address: IAddress): Observable<any> {
        return this.httpClient.post<any>(environment.baseSiteUrl + '/checkout/address', address);
    }

    public payment(card: any): Observable<any> {
        return this.httpClient.post<any>(environment.baseSiteUrl + '/checkout/payment', card);
    }

    public shipment(postalCode: string, products: Array<IProduct>) {
        const shipments = products.map(product => {
            return { id: product.id, quantity: product.quantity ? product.quantity : 1 }
        })
        return this.httpClient.post<any>(environment.baseSiteUrl + '/checkout/shipment', { postal_code: postalCode, products: shipments });
    }
}