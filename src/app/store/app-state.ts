import { ActionReducerMap } from "@ngrx/store";
import { Dish } from "../shared/models/dish.model";
import { ShoppingReducer } from "./shopping.reducer";

export interface AppState {
    readonly shopping: Dish[];
}

export const reducers: ActionReducerMap<AppState, any> = {
    shopping: ShoppingReducer
};
