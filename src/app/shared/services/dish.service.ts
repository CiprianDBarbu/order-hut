import { Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishesList() {
    return [
      {
        dishId: 1,
        name: "Natalie Banks",
        price: 5,
        description: "et"
      },
      {
        dishId: 2,
        name: "Colin Herrera",
        price: 7,
        description: "Duis mi enim, condimentum eget,"
      },
      {
        dishId: 3,
        name: "Maryam Rodriquez",
        price: 3,
        description: "sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus"
      },
      {
        dishId: 4,
        name: "Kyla Hurley",
        price: 7,
        description: "odio sagittis semper. Nam tempor"
      },
      {
        dishId: 5,
        name: "Chastity Downs",
        price: 10,
        description: "egestas a, dui. Cras pellentesque."
      }
    ];
  }

  find(id: number): Dish {
    return new Dish();
  }
}
