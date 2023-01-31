import { Table } from "./table.model";
import { Waiter } from "./waiter.model";

export class Planification {
    planificationId?: number;
    waiter!: Waiter;
    actualTable!: Table;
}
