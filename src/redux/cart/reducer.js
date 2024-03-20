import { CartReducerTypes } from "./action-types";

const initialState = {
    cart: [],
    };


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartReducerTypes.ADD:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case CartReducerTypes.REMOVE:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case CartReducerTypes.CLEAR:
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
}