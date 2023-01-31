import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order.model';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  ordersList!: Order[];
  isAdmin?: boolean = true;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.query().subscribe((res) => this.ordersList = res);
  }

  delete(order: Order) {
    //delete the Order
  }
}
