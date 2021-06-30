export interface IDiscount {
	id?: number;
	name?: string;
	code?: string;
	value?: number;
	type?: string;
	discount_options?: Array<IDiscountOption>;
}

export interface IDiscountOption {
	id?: number;
	discount_id?: number;
	option_id?: number;
	min_products?: number;
	max_products?: number;
	value?: number;
}