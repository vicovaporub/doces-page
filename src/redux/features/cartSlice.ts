import { ProductType } from "@/types/ProductType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: ProductType[];
  price: number;
}

const initialState: CartState = {
  items: [],
  price: 0,
};

export const cart = createSlice({
  name: "cart",
  initialState,

  reducers: {
    clearCart: () => initialState,
    addToCart: (state, action: PayloadAction<ProductType>) => {
      return {
        ...state,
        items: [...state.items, action.payload],
        price: state.price + action.payload.price,
      };
    },
  },
});

export const { clearCart, addToCart } = cart.actions;
export default cart.reducer;
