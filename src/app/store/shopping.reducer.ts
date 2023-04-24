import { Dish } from "../shared/models/dish.model";
import { ADD_ITEM, DELETE_ALL_ITEMS, DELETE_ITEM, ShoppingAction } from "./shopping.actions";

const initialState: Dish[] = [];

export function ShoppingReducer(state: Dish[] = initialState, action: ShoppingAction) {
    switch(action.type) {
        case ADD_ITEM:
            console.log("REDUCER");
            return [
                ...state,
                action.payload
            ];

        case DELETE_ITEM:
            return state.filter(dish => dish.dishId !== action.payload);

        case DELETE_ALL_ITEMS:
            return [];

        default:
            return state;
    }
}
