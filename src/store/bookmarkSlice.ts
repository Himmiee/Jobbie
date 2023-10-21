import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { JobType } from '../helpers/dumps';



type BookmarkState = {
  bookmarks: JobType[];
}

const initialState: BookmarkState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<JobType>) => {
      state.bookmarks = [...state.bookmarks, action.payload]
      // state.bookmarks.push(action.payload);
    },
    removeBookmark: (state, action: PayloadAction<number>) => {
      state.bookmarks = state.bookmarks.filter((bookmark) => bookmark.id !== action.payload);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export const selectBookmarks = (state: RootState) => state.bookmarks.bookmarks;

export default bookmarkSlice.reducer;
