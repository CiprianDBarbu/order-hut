import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
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

  constructor(private orderService: OrderService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.orderService.query().subscribe((res) => this.ordersList = res);
  }

  delete(order: Order): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      accept: () => {
        this.orderService.delete(order.orderId!).subscribe();
        location.reload();
      }
    });
  }
}
