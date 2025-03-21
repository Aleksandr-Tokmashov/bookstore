import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBooksApi, TBook } from "./api";

export type TBookWithPrice = TBook & {
  price: number;
};

interface BooksState {
  isLoading: boolean;
  error: string | undefined;
  data: TBookWithPrice[];
}

export const initialState: BooksState = {
  isLoading: false,
  error: "",
  data: [],
};

export const getBooks = createAsyncThunk("books/getAll", getBooksApi);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const booksWithPrice = action.payload.map((book) => {
          return { ...book, price: 999 };
        });
        state.data = booksWithPrice;
      });
  },
  selectors: {
    getBooksSelector: (state) => state.data,
    isLoadingSelector: (state) => state.isLoading,
    getErrorSelector: (state) => state.error,
  },
});

export const { getBooksSelector, isLoadingSelector, getErrorSelector } =
  booksSlice.selectors;

export default booksSlice.reducer;
