import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { JobType } from "../helpers/dumps";

type BookmarkState = {
  bookmarks: JobType[];
  bookmarkStatus: boolean;
  popupMessage: string;
};

const initialState: BookmarkState = {
  bookmarks: [],
  bookmarkStatus: false,
  popupMessage: "",
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<JobType>) => {
      if (!state.bookmarks.find((item) => item.id === action.payload.id)) {
        state.bookmarks.push(action.payload);
        state.bookmarkStatus = true;
        state.popupMessage = "Bookmark Added!";
      }
    },

    removeBookmark: (state, action: PayloadAction<number>) => {
      const bookmarkIdToRemove = action.payload;
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.id !== bookmarkIdToRemove
      );
      state.bookmarkStatus = false;
      state.popupMessage = "Bookmark Removed!";
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export const selectBookmarks = (state: RootState) => state.bookmarks.bookmarks;

export default bookmarkSlice.reducer;
