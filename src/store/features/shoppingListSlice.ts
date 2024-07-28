import { PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";
import { RootState } from "../store";
import { Item } from "../../types/types";
import {
  deleteItem,
  fetchAllItems,
  postItem,
} from "../../services/shoppingList";
import { createAppSlice } from "../CreateAppSlice";

export interface ShoppingListState {
  items: Item[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ShoppingListState = {
  items: [],
  status: "idle",
  error: null,
};

type AddItemResponse = {
  data: Item[];
};

const shoppingListSlice = createAppSlice({
  name: "shoppingList",
  initialState,
  reducers: (create) => ({
    addItem: create.asyncThunk(postItem, {
      pending: (state) => {
        state.status = "loading";
      },
      fulfilled: (state, action: PayloadAction<AddItemResponse>) => {
        state.status = "succeeded";
        state.items.push(action.payload.data[0]);
      },
      rejected: (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      },
    }),
    removeItem: create.asyncThunk(deleteItem, {
      pending: (state) => {
        state.status = "loading";
      },
      fulfilled: (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter(
          (item) => item.id !== action.payload.data.id
        );
      },
      rejected: (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      },
    }),
    editItem: create.asyncThunk(postItem, {
      pending: (state) => {
        state.status = "loading";
      },
      fulfilled: (state, action) => {
        state.status = "succeeded";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.data[0].id
        );
        state.items[index] = action.payload.data[0];
      },
      rejected: (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      },
    }),
    fetchItems: create.asyncThunk(fetchAllItems, {
      pending: (state) => {
        state.status = "loading";
      },
      fulfilled: (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.data;
      },
      rejected: (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      },
    }),
  }),
});

export const { addItem, removeItem, editItem, fetchItems } =
  shoppingListSlice.actions;

export const select = (state: RootState) => state.shoppingList;

export default shoppingListSlice;
