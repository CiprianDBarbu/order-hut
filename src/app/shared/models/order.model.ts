import { Time } from "@angular/common";
import { Dish } from "./dish.model";

export class Order {
    orderId?: number;
    dishList?: Dish[];
    totalPrice?: number;
    clientId?: number;
    tableId?: number;
    orderTime?: Time;
}