import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientComponent } from './client/client.component';
import { DishComponent } from './dish/dish.component';
import { OrderComponent } from './order/order.component';
import { TableComponent } from './table/table.component';
import { WaiterComponent } from './waiter/waiter.component';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
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
import { ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanificationComponent } from './planification/planification.component';
import { PlanificationDetailComponent } from './planification/planification-detail.component';
import { PlanificationUpdateComponent } from './planification/planification-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselModule } from 'primeng/carousel';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { FieldsetModule } from 'primeng/fieldset';
import { PasswordModule } from 'primeng/password';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/shopping.reducer';
import { CartComponent } from './cart/cart.component';
import { reducers } from './store/app-state';
import { GoogleMapsModule } from '@angular/google-maps'

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
    WaiterUpdateComponent,
    PlanificationComponent,
    PlanificationDetailComponent,
    PlanificationUpdateComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    MultiSelectModule,
    DialogModule,
    InputTextareaModule,
    CalendarModule,
    ToastModule,
    CarouselModule,
    GoogleMapsModule,
    TooltipModule,
    FieldsetModule,
    PasswordModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
