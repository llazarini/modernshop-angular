export interface IProduct {
    id?: number;
	name?: string;
	description?: string;
	categories?: Array<ICategory>;
}

export interface ICategory {
	id?: number;
	name?: string;
	code?: string;
}
