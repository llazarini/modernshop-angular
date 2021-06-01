import {IOption} from './IOption';

export interface IAttribute {
	id?: number;
	name?: string;
	description?: string;
	options?: Array<IOption>;
}