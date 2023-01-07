import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order.model';
import { OrdereService } from '../shared/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  ordersList!: Order[];
  isAdmin?: boolean = true;

  constructor(private orderService: OrdereService) { }

  ngOnInit(): void {
    this.ordersList = this.orderService.getOrdersList();
  }

  delete(order: Order) {
    //delete the Order
  }
}
