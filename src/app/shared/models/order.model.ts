import { Time } from "@angular/common";
import { Client } from "./client.model";
import { Dish } from "./dish.model";
import { Planification } from "./planification.model";

enum OrderStatus {
    WAITING,
    IN_PROGRESS,
    DONE
}

export class Order {
    orderId?: number;
    totalPrice?: number;
    orderTime?: Date;
    orderStatus?: OrderStatus;
    comments?: String;
    orderClient!: Client;
    planification!: Planification;
    dishList!: Dish[];
}