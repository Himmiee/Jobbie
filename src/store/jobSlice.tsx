import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type State = {
  job: string;
};

const initialState: State = {
  job: "",
};

export const jobSlice = {
  name: "jobSlice",
  initialState,
  reducers: {},
};

// export const { } = jobSlice.actions

// export default jobSlice.reducer