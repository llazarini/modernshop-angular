import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IBanner} from '../../../interfaces/IBanner';
import {IProduct} from '../../../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
    constructor(private httpClient: HttpClient) { }

    public get products(): Array<IProduct> {
        const parsed = JSON.parse(sessionStorage.getItem('chart_products'));
        return parsed ? parsed : [];
    }

    public set products(products: Array<IProduct>) {
        sessionStorage.setItem('chart_products', JSON.stringify(products));
    }

    public add(product: IProduct): void {
        const products = this.products;
        products.push(product);
        this.products = products;
        console.log(this.products)
    }

    public remove(product: IProduct): void {
        this.products.push(product);
    }
}