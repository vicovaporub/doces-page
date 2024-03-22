import { ProductType } from "@/types/ProductType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  products: ProductType[];
  price: number;
}

const initialState: CartState = {
  products: [],
  price: 0,
};

export const cart = createSlice({
  name: "cart",
  initialState,

  reducers: {
    clearCart: () => initialState,
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const isProductOnCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (isProductOnCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: (product.quantity || 0) + 1 }
              : product
          ),
        };
      }

      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    },
  },
});

export const { clearCart, addToCart } = cart.actions;
export default cart.reducer;
