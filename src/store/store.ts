import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice";
import bookmarkReducer from "./bookmarkSlice";

export const store = configureStore({
  reducer: {
    job: jobReducer,
    bookmarks: bookmarkReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;