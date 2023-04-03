import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailComponent } from './client/client-detail.component';
import { ClientUpdateComponent } from './client/client-update.component';
import { ClientComponent } from './client/client.component';
import { DishDetailComponent } from './dish/dish-detail.component';
import { DishUpdateComponent } from './dish/dish-update.component';
import { DishComponent } from './dish/dish.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OrderDetailComponent } from './order/order-detail.component';
import { OrderUpdateComponent } from './order/order-update.component';
import { OrderComponent } from './order/order.component';
import { PlanificationDetailComponent } from './planification/planification-detail.component';
import { PlanificationUpdateComponent } from './planification/planification-update.component';
import { PlanificationComponent } from './planification/planification.component';
import { TableDetailComponent } from './table/table-detail.component';
import { TableUpdateComponent } from './table/table-update.component';
import { TableComponent } from './table/table.component';
import { WaiterDetailComponent } from './waiter/waiter-detail.component';
import { WaiterUpdateComponent } from './waiter/waiter-update.component';
import { WaiterComponent } from './waiter/waiter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'client', component: ClientComponent },
  { path: 'client/:clientId/view', component: ClientDetailComponent },
  { path: 'client/:clientId/edit', component: ClientUpdateComponent },
  { path: 'client/new', component: ClientUpdateComponent },
  { path: 'dish', component: DishComponent },
  { path: 'dish/:dishId/view', component: DishDetailComponent },
  { path: 'dish/:dishId/edit', component: DishUpdateComponent },
  { path: 'dish/new', component: DishUpdateComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order/:orderId/view', component: OrderDetailComponent },
  { path: 'order/:orderId/edit', component: OrderUpdateComponent },
  { path: 'order/new', component: OrderUpdateComponent },
  { path: 'table', component: TableComponent },
  { path: 'table/:tableId/view', component: TableDetailComponent },
  { path: 'table/:tableId/edit', component: TableUpdateComponent },
  { path: 'table/new', component: TableUpdateComponent },
  { path: 'waiter', component: WaiterComponent },
  { path: 'waiter/:waiterId/view', component: WaiterDetailComponent },
  { path: 'waiter/:waiterId/edit', component: WaiterUpdateComponent },
  { path: 'waiter/new', component: WaiterUpdateComponent },
  { path: 'planification', component: PlanificationComponent },
  { path: 'planification/:planificationId/view', component: PlanificationDetailComponent },
  { path: 'planification/:planificationId/edit', component: PlanificationUpdateComponent },
  { path: 'planification/new', component: PlanificationUpdateComponent },
  { path: 'menu', component: MenuComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }