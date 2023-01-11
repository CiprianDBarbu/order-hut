import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientComponent } from './client/client.component';
import { DishComponent } from './dish/dish.component';
import { OrderComponent } from './order/order.component';
import { TableComponent } from './table/table.component';
import { WaiterComponent } from './waiter/waiter.component';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { ClientDetailComponent } from './client/client-detail.component';
import { ClientUpdateComponent } from './client/client-update.component';
import { DishDetailComponent } from './dish/dish-detail.component';
import { DishUpdateComponent } from './dish/dish-update.component';
import { OrderDetailComponent } from './order/order-detail.component';
import { OrderUpdateComponent } from './order/order-update.component';
import { TableDetailComponent } from './table/table-detail.component';
import { TableUpdateComponent } from './table/table-update.component';
import { WaiterDetailComponent } from './waiter/waiter-detail.component';
import { WaiterUpdateComponent } from './waiter/waiter-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    DishComponent,
    OrderComponent,
    TableComponent,
    WaiterComponent,
    ClientDetailComponent,
    ClientUpdateComponent,
    DishDetailComponent,
    DishUpdateComponent,
    OrderDetailComponent,
    OrderUpdateComponent,
    TableDetailComponent,
    TableUpdateComponent,
    WaiterDetailComponent,
    WaiterUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
