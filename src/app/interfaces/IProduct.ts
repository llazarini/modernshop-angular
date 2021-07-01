import {ICategory} from './ICategory';
import {IFile} from './IFile';
import {IOption} from './IOption';
import {IAttribute} from './IAttribute';

export interface IProduct {
	url?: string;
	sku?: string;
	attributes: Array<IAttribute>;
    id?: number;
	name?: string;
	slug?: string;
	description?: string;
	selected_options?: Array<IOption>;
	options?: Array<IOption>;
	categories?: Array<ICategory>;
	files?: Array<IFile>;
	file?: IFile;
	price?: number;
	option_price?: number;
	price_cost?: number;
	total_price?: number;
	quantity?: number;
	meta_title?: string;
	meta_description?: string;
	meta_keys?: string;
}

export interface IInstallment {
	price?: number;
	total?: number;
	installment?: number;
}