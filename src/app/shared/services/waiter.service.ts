import { Injectable } from '@angular/core';
import { Waiter } from '../models/waiter.model';

@Injectable({
  providedIn: 'root'
})
export class WaiterService {

  constructor() { }

  getWaitersList() {
    return [
      {
        waiterId: 1,
        name: "Isabella Lindsay",
        tablesListIds: [6]
      },
      {
        waiterId: 2,
        name: "Fay Santos",
        tablesListIds: [5, 2, 7]
      },
      {
        waiterId: 3,
        name: "Keane Pace",
        tablesListIds: [1]
      },
      {
        waiterId: 4,
        name: "Clementine Lyons",
        tablesListIds: [3, 4]
      },
      {
        waiterId: 5,
        name: "Susan Anthony",
        tablesListIds: [8, 9, 10]
      }
    ];
  }

  find(id: number): Waiter {
    return new Waiter();
  }
}
