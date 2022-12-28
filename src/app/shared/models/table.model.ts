import { Client } from "./client.model";
import { Order } from "./order.model";

export class Table {
    tableId?: number;
    clientId?: number;
    waiterId?: number;
    ordersList?: Order[];
    finalPrice?: number;
}