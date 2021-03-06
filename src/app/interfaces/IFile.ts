import {ICompany} from './ICompany';

export class IFileClassType {
    public static product: string = 'App\\Models\\Product';
    public static category: string = 'App\\Models\\Category';
    public static option: string = 'App\\Models\\Option';
}

export interface IFile {
    id?: number;
    company_id?: number;
    request_token?: string;
    company?: ICompany;
    name?: string;
    original_name?: string;
    size?: number;
    url?: string;
}
