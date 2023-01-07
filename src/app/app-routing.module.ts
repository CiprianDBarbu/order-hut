import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { DishComponent } from './dish/dish.component';
import { OrderComponent } from './order/order.component';
import { TableComponent } from './table/table.component';
import { WaiterComponent } from './waiter/waiter.component';

const routes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: 'dish', component: DishComponent },
  { path: 'order', component: OrderComponent },
  { path: 'table', component: TableComponent },
  { path: 'waiter', component: WaiterComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }