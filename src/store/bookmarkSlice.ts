import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { JobType } from "../helpers/dumps";

type BookmarkState = {
  bookmarks: JobType[];
  bookmarkStatus: boolean;
};

const initialState: BookmarkState = {
  bookmarks: [],
  bookmarkStatus: false,
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<JobType>) => {
      if (!state.bookmarks.find((item) => item.id === action.payload.id)) {
        state.bookmarks.push(action.payload);
        state.bookmarkStatus = true
      }
    },

    removeBookmark: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.bookmarks.splice(index, 1);
      state.bookmarkStatus = false
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export const selectBookmarks = (state: RootState) => state.bookmarks.bookmarks;

export default bookmarkSlice.reducer;
