import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClientsList() {
    return [
      {
        clientId: 1,
        name: "Patrick Farmer",
        orderId: 2,
        orderTotalPrice: 39,
        tableId: 2,
      },
      {
        clientId: 2,
        name: "Plato Clay",
        orderId: 2,
        orderTotalPrice: 38,
        tableId: 1,
      },
      {
        clientId: 3,
        name: "Shellie Steele",
        orderId: 3,
        orderTotalPrice: 35,
        tableId: 1,
      },
      {
        clientId: 4,
        name: "Herrod Cote",
        orderId: 3,
        orderTotalPrice: 39,
        tableId: 3,
      },
      {
        clientId: 5,
        name: "Kimberley Conway",
        orderId: 4,
        orderTotalPrice: 22,
        tableId: 0,
      },
    ];
  }
}
