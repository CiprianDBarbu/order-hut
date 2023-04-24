import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/models/dish.model';
import { Observable } from 'rxjs';
import { AppState } from '../store/app-state';
import { Store } from '@ngrx/store';
import { OrderService } from '../shared/services/order.service';
import { Router } from '@angular/router';
import { DeleteAllItemsAction, DeleteItemAction } from '../store/shopping.actions';
import { Order, OrderStatus } from '../shared/models/order.model';
import { Client } from '../shared/models/client.model';
import { Planification } from '../shared/models/planification.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../shared/services/client.service';
import { PlanificationService } from '../shared/services/planification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  shoppingItems!: Observable<Dish[]>;
  items!: Dish[];
  order!: Order; 
  cartSubtotal!: number;
  isOrderCreated = false;
  client!: Client;
  minDate!: Date;
  maxDate!: Date;
  planifications!: Planification[];

  cartForm = this.fb.group({
    clientName: ['', Validators.required],
    reservationDate: [],
    numberOfPeople: [],
    comments: [],
  });

  constructor(private store: Store<AppState>,
              public router: Router,
              protected orderService: OrderService,
              protected clientService: ClientService,
              protected planificationService: PlanificationService,
              private fb: FormBuilder
            ) { }

  ngOnInit(): void {
    this.shoppingItems = this.store.select(el => el.shopping);
    console.log("InitCart" ,this.shoppingItems);
    this.calculateSubtotal();
    this.initCalendar();
    this.initPlanifications();
  }

  removeItemFromCart(id: any): void {
    this.store.dispatch(new DeleteItemAction(id));
    this.calculateSubtotal();
  }

  calculateSubtotal(): void {
    this.shoppingItems.subscribe((res) => {
      this.items = res;
      console.log(res);
      this.cartSubtotal = this.items.reduce((accumulator, currentValue) => accumulator + currentValue.price!, 0);
    });
  }

  toCheckout(): void {
    let actualClient: Client;
    this.clientService.create().subscribe((res) => {
      actualClient = res;

      this.orderService.formData.orderTime = this.orderService.formData.orderTime ? this.orderService.formData.orderTime : new Date();
      this.orderService.formData.dishList = this.items;
      this.orderService.formData.totalPrice = this.cartSubtotal;
      this.orderService.formData.orderStatus = OrderStatus.WAITING;
      this.orderService.formData.comments = this.orderService.formData.comments? this.orderService.formData.comments : "";
      this.orderService.formData.orderClient = actualClient;
      this.orderService.formData.planification = this.planifications.find(el => el.actualTable.numberOfSeats! >= this.cartForm.get(['numberOfPeople'])!.value)!;

      this.orderService.create().subscribe((res) => {
        this.order = res;
      },
      (err) => { },
      () => {
        this.store.dispatch(new DeleteAllItemsAction());
        this.isOrderCreated = true;
        this.router.navigate(['/menu']);
      });
    });
  }

  initCalendar() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let nextMonth = (month === 11) ? 0 : month + 1;
    this.minDate = today;
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(year);
  }

  initPlanifications(): void {
    this.planificationService.query().subscribe((res) => { this.planifications = res; });
  }
}
