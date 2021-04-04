import {ICompany} from './ICompany';

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
