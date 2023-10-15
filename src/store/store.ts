import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";

export const store = configureStore({
  reducer: {
    job: jobSlice
  },
});

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
