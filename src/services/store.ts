import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import cartReducer from "./cartSlice";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";

const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
