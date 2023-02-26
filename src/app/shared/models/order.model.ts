import { Time } from "@angular/common";
import { Client } from "./client.model";
import { Dish } from "./dish.model";
import { Planification } from "./planification.model";

export enum OrderStatus {
    WAITING = "WAITING",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"
}

export class Order {
    orderId?: number;
    totalPrice?: number;
    orderTime?: Date;
    orderStatus?: OrderStatus;
    comments?: string;
    orderClient!: Client;
    planification!: Planification;
    dishList!: Dish[];
}