import {ICategory} from './ICategory';

export interface IProduct {
    id?: number;
	name?: string;
	description?: string;
	categories?: Array<ICategory>;
}