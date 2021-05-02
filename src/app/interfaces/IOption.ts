import {ISelectable} from './ISelectable';

export interface IOption extends ISelectable {
	type?: boolean;
	description: string;
	id?: number;
	name?: string;
	price?: number;
	value?: number;
}