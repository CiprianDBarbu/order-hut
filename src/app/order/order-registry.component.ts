import { Component, OnInit } from '@angular/core';
import { Order, OrderStatus } from '../shared/models/order.model';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'app-order-registry',
  templateUrl: './order-registry.component.html',
  styleUrls: ['./order-registry.component.scss']
})
export class OrderRegistryComponent implements OnInit {
  orderListWaiting!: Order[];
  orderListProgress!: Order[];
  orderListDone!: Order[];
  isWaiter?: boolean = true;
  statusOptions = ['WAITING', 'IN_PROGRESS', 'DONE'];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.query().subscribe((res) => {
      this.orderListWaiting = res.filter(el => el.orderStatus === OrderStatus.WAITING);
      this.orderListProgress = res.filter(el => el.orderStatus === OrderStatus.IN_PROGRESS);
      this.orderListDone = res.filter(el => el.orderStatus === OrderStatus.DONE);
    });
  }

  toInProgress(order: Order): void {
    this.orderListWaiting = this.orderListWaiting.filter(el => el.orderId !== order.orderId);
    this.orderListProgress.push(order);

    this.orderService.formData = order;
    this.orderService.formData.orderStatus = OrderStatus.IN_PROGRESS;
    this.orderService.update().subscribe();
  }

  toWaiting(order: Order): void {
    this.orderListProgress = this.orderListProgress.filter(el => el.orderId !== order.orderId);
    this.orderListWaiting.push(order);

    this.orderService.formData = order;
    this.orderService.formData.orderStatus = OrderStatus.WAITING;
    this.orderService.update().subscribe();
  }

  toDone(order: Order): void {
    this.orderListProgress = this.orderListProgress.filter(el => el.orderId !== order.orderId);
    this.orderListDone.push(order);

    this.orderService.formData = order;
    this.orderService.formData.orderStatus = OrderStatus.DONE;
    this.orderService.update().subscribe();
  }

  toProgress(order: Order): void {
    this.orderListDone = this.orderListDone.filter(el => el.orderId !== order.orderId);
    this.orderListProgress.push(order);

    this.orderService.formData = order;
    this.orderService.formData.orderStatus = OrderStatus.IN_PROGRESS;
    this.orderService.update().subscribe();
  }
}
