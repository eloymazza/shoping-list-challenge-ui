import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";
import { RootState } from "../store";

interface Item {
  id: number;
  name: string;
}

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

// Async thunk for fetching items
// export const fetchItems = createAsyncThunk(
//   "shoppingList/fetchItems",
//   async () => {
//     const response = await axios.get("/api/shopping-list");
//     return response.data;
//   }
// );

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchItems.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(fetchItems.fulfilled, (state, action) => {
  //       state.status = "succeeded";
  //       state.items = action.payload;
  //     })
  //     .addCase(fetchItems.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.error.message || null;
  //     });
  // },
});

export const { addItem, removeItem } = shoppingListSlice.actions;

export const select = (state: RootState) => state.shoppingList;

export default shoppingListSlice.reducer;
