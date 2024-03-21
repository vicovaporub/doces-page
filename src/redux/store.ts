import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    authReducer,
    cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
