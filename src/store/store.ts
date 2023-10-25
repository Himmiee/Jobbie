import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice";
import bookmarkReducer from "./bookmarkSlice";
import initialDataReducer from "./initialDataSlice";
import loginReducer from "./loginslice";
import registerReducer from "./registerslice";

export const store = configureStore({
  reducer: {
    job: jobReducer,
    bookmarks: bookmarkReducer,
    initialData: initialDataReducer,
    login: loginReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
