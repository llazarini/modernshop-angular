import {IFile} from './IFile';

export interface IBannerCategory {
	id?: number;
	name?: string;
	slug?: string;
	description?: string;
}

export interface IBanner {
	id?: number;
	name?: string;
	slug?: string;
	content?: string;
	image?: IFile;
}
