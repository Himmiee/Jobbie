import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const initialDataSlice = createSlice({
  name: "initialData",
  initialState,
  reducers: {
    setInitialData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setInitialData } = initialDataSlice.actions;
export default initialDataSlice.reducer;
