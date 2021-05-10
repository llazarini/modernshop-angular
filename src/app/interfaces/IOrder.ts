import {IProduct} from './IProduct';
import {IAddress} from './IAddress';

export interface IPaymentStatus {
	id: number;
	name: string;
	slug: string;
}

export interface IPaymentType {
	id: number;
	name: string;
	slug: string;
}

export interface IOrderProduct {
	id: number;
	quantity: number;
	amount: number;
	price: number;
	order_id?: number;
	product_id?: number;
	product: IProduct;
	order: IOrder;
}

export interface IOrder {
	user_address: IAddress;
    id: number;
	payment_status_id: number;
	payment_type_id: number;
	payment_status: IPaymentStatus;
	payment_type: IPaymentType;
	amount_without_shipment: number;
	amount: number;
	shipment: number;
	shipment_option: string;
	order_products: Array<IOrderProduct>;
}
