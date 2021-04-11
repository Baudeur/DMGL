import { IPanier } from 'app/shared/model/panier.model';
import { IRestaurant } from 'app/shared/model/restaurant.model';

export interface ICourse {
  id?: number;
  timerequired?: number;
  panier?: IPanier;
  restaurant?: IRestaurant;
}

export class Course implements ICourse {
  constructor(public id?: number, public timerequired?: number, public panier?: IPanier, public restaurant?: IRestaurant) {}
}
