import {IFile} from './IFile';

export interface IBannerCategory {
	banners: Array<IBanner>;
	id?: number;
	name?: string;
	slug?: string;
	description?: string;
}

export interface IBanner {
	file?: IFile;
	id?: number;
	name?: string;
	slug?: string;
	content?: string;
}
