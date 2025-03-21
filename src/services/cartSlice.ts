import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TBookWithPrice } from "./booksSlice";

type TCartState = {
  books: TBookWithPrice[];
};

const initialState: TCartState = {
  books: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  selectors: {
    getBooksSelector: (state) => state.books,
  },
  reducers: {
    addBook: (state, action: PayloadAction<TBookWithPrice>) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = cartSlice.actions;

export const { getBooksSelector } = cartSlice.selectors;

export default cartSlice.reducer;
