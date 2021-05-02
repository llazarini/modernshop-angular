import {ICategory} from './ICategory';
import {IFile} from './IFile';
import {IOption} from './IOption';

export interface IProduct {
    id?: number;
	name?: string;
	description?: string;
	selected_option?: IOption;
	options?: Array<IOption>;
	categories?: Array<ICategory>;
	files?: Array<IFile>;
	file?: IFile;
	price?: number;
	price_cost?: number;
	total_price?: number;
	quantity?: number;
}