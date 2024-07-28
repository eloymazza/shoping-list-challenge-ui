import { combineSlices, configureStore } from "@reduxjs/toolkit";
import shoppingListSlice from "./features/shoppingListSlice";

const rootReducer = combineSlices(shoppingListSlice);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
