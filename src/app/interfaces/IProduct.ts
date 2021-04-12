import {ICategory} from './ICategory';
import {IFile} from './IFile';

export interface IProduct {
    id?: number;
	name?: string;
	description?: string;
	categories?: Array<ICategory>;
	files?: Array<IFile>;
	file?: IFile;
}