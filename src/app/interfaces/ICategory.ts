import {ISelectable} from './ISelectable';
import {IFile} from './IFile';

export interface ICategory extends ISelectable {
	id?: number;
	name?: string;
	slug?: string;
	description?: string;
	file?: IFile;
}
