import {ISelectable} from './ISelectable';

export interface ICategory extends ISelectable {
	id?: number;
	name?: string;
	slug?: string;
	description?: string;
}
