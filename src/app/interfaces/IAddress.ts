import {ICity} from './ICity';
import {IState} from './IState';

export interface IAddress {
	street_name: string;
	complement: string;
	street_number: number;
	zip_code: string;
	city: ICity;
	state: IState;
    id: number;
    name: string;
}
