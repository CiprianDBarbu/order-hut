import { Action } from "@ngrx/store";
import { Dish } from "../shared/models/dish.model";

export const ADD_ITEM = '[SHOPPING] Add item';
export const DELETE_ITEM = '[SHOPPING] Delete item';
export const DELETE_ALL_ITEMS = '[SHOPPING] Delete all items';

export class AddItemAction implements Action {
    readonly type = ADD_ITEM;

    constructor(public payload: Dish) {}
}

export class DeleteItemAction implements Action {
    readonly type = DELETE_ITEM;

    constructor(public payload: number) {}
}

export class DeleteAllItemsAction implements Action {
    readonly type = DELETE_ALL_ITEMS;

    constructor() {}
}

export type ShoppingAction = 
    AddItemAction |
    DeleteItemAction |
    DeleteAllItemsAction;
