import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../shared/models/order.model';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order!: Order;
  isAdmin?: boolean = true;
  isWaiter?: boolean = true;

  constructor(protected activatedRouter: ActivatedRoute, protected orderService: OrderService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['orderId'];
    this.isAdmin = sessionStorage.getItem("token") === null ? false : true;

    this.orderService.find(id).subscribe((res) => this.order = res);
  }

  back() {
    window.history.back();
  }
}
