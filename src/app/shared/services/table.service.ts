import { Injectable } from '@angular/core';
import { Table } from '../models/table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  getTablesList() {
    return [
      {
        tableId: 1,
        clientId: 3,
        waiterId: 2,
        orderId: 9
      },
      {
        tableId: 2,
        clientId: 3,
        waiterId: 4,
        orderId: 5
      },
      {
        tableId: 3,
        clientId: 1,
        waiterId: 1,
        orderId: 7
      },
      {
        tableId: 4,
        clientId: 0,
        waiterId: 3,
        orderId: 3
      },
      {
        tableId: 5,
        clientId: 3,
        waiterId: 5,
        orderId: 7
      }
    ];
  }

  find(id: number): Table {
    return new Table();
  }
}
