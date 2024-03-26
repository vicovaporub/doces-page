import { OrderType } from "@/types/OrderType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  order: {} as OrderType,
};

export const order = createSlice({
  name: "order",
  initialState,

  reducers: {
    checkoutOrder: (state, action: PayloadAction<OrderType>) => {
      state.order = action.payload;
    },
  },
});

export const { checkoutOrder } = order.actions;

export default order.reducer;
