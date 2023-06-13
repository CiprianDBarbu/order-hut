import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../shared/models/client.model';
import { Dish } from '../shared/models/dish.model';
import { Order, OrderStatus } from '../shared/models/order.model';
import { Planification } from '../shared/models/planification.model';
import { ClientService } from '../shared/services/client.service';
import { DishService } from '../shared/services/dish.service';
import { OrderService } from '../shared/services/order.service';
import { PlanificationService } from '../shared/services/planification.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.scss']
})
export class OrderUpdateComponent implements OnInit {

  orderForm = this.fb.group({
    orderId: [0],
    totalPrice: [0],
    orderTime: new Date(),
    orderStatus: OrderStatus.WAITING,
    comments: [''],
    orderClient: new Client(),
    planification: new Planification(),
    dishList: new Array<Dish>(),
  });

  clients!: Client[];
  planifications!: Planification[];
  dishes!: Dish[];
  statusOptions = ['WAITING', 'IN_PROGRESS', 'DONE'];
  isAdd!: boolean;
  addToOrder: boolean = false;
  actualDishList: Dish[] = new Array<Dish>;

  
  constructor(
    protected activatedRouter: ActivatedRoute,
    protected orderService: OrderService,
    protected clientService: ClientService,
    protected planificationService: PlanificationService,
    protected dishService: DishService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['orderId'];

    if(id) {
      this.orderService.find(id).subscribe((res) => this.updateForm(res));
      this.isAdd = false;
    } else {
      this.isAdd = true;
    }

    this.updateClients();
    this.updatePlanifications();
    this.updateDishes();
  }

  updateForm(order: Order): void {
    this.orderForm.patchValue({
      orderId: order.orderId,
      totalPrice: order.totalPrice,
      orderTime: order.orderTime,
      orderStatus: order.orderStatus,
      comments: order.comments,
      orderClient: order.orderClient,
      planification: order.planification,
    });
    this.actualDishList = order.dishList;
    this.orderForm.get(['dishList'])?.patchValue(this.actualDishList);
  }

  previousState() {
    window.history.back();
    this.orderService.formData = new Order();
  }

  onSubmit(): void {
    this.orderService.formData = this.createFromForm();
    if(!this.isAdd) {
      this.orderService.update().subscribe(() => this.previousState());
    } else {
      this.orderService.create().subscribe(() => this.previousState());
    }
  }

  createFromForm(): Order {
    return {
      ...new Order(),
      orderId: this.orderForm.get(['orderId'])!.value !== 0 ? this.orderForm.get(['orderId'])!.value : undefined,
      totalPrice: this.orderForm.get(['totalPrice'])!.value,
      orderTime: this.orderForm.get(['orderTime'])!.value,
      orderStatus: this.orderForm.get(['orderStatus'])!.value,
      comments: this.orderForm.get(['comments'])!.value,
      orderClient: this.orderForm.get(['orderClient'])!.value,
      planification: this.orderForm.get(['planification'])!.value,
      dishList: this.orderForm.get(['dishList'])!.value,
    };
  }

  updateClients(): void {
    this.clientService.query().subscribe((res) => {this.clients = res});
  }

  updatePlanifications(): void {
    this.planificationService.query().subscribe((res) => {this.planifications = res});
  }

  updateDishes(): void {
    this.dishService.query().subscribe((res) => {this.dishes = res});
  }

  toggleAddToOrder(): void {
    this.addToOrder = !this.addToOrder;
  }

  addDishToOrder(dish: Dish) : void {
    this.actualDishList.push(dish);
    this.orderForm.get(['dishList'])?.patchValue(this.actualDishList);

    this.toggleAddToOrder();
  }

  removeDish(index: any) : void {
    this.actualDishList.splice(index, 1);
  }
}
