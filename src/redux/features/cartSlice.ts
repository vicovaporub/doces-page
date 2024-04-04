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
    increaseProductQuantityFromCart: (
      state,
      action: PayloadAction<ProductType>
    ) => {
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: (product.quantity || 0) + 1 }
            : product
        ),
      };
    },
    decreaseProductQuantityFromCart: (
      state,
      action: PayloadAction<ProductType>
    ) => {
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: Math.max((product.quantity || 0) - 1, 0) }
            : product
        ),
      };
    },
    setProductQuantityInCart: (
      state,
      action: PayloadAction<{ product: ProductType; quantity: number }>
    ) => {
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.product.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      };
    },
    removeProductFromCart: (state, action: PayloadAction<ProductType>) => {
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    },
  },
});

export const {
  clearCart,
  addToCart,
  increaseProductQuantityFromCart,
  decreaseProductQuantityFromCart,
  removeProductFromCart,
  setProductQuantityInCart,
} = cart.actions;
export default cart.reducer;
