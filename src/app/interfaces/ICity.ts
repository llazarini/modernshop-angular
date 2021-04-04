import {IState} from './IState';

export interface ICity {
  id: number;
  state_id: number;
  name: string;
  state: IState;
}
