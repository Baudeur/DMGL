import { IRestaurant } from 'app/shared/model/restaurant.model';

export interface ICooperative {
  id?: number;
  name?: string;
  restaurants?: IRestaurant[];
}

export class Cooperative implements ICooperative {
  constructor(public id?: number, public name?: string, public restaurants?: IRestaurant[]) {}
}
