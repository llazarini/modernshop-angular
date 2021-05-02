import {ICity} from './ICity';
import {IState} from './IState';

interface IUserAddress {
	city: ICity;
	state: IState;
	complement: string;
	street_name: string;
	street_number: string;
	neighborhood: string;
	zip_code: string;
}

export interface IUser {
	main_address: IUserAddress;
    id: number;
}
