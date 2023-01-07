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

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    DishComponent,
    OrderComponent,
    TableComponent,
    WaiterComponent
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
