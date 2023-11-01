import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { JobType } from "../helpers/dumps";
import axios from "axios";

type initialType = {
  loading: boolean;
  data: JobType[];
  filteredData: JobType[];
  error: string;
  pages: Record<number, JobType[]>;
};

const initialState: initialType = {
  loading: false,
  data: [],
  filteredData: [],
  error: "",
  pages: {},
};

export const fetchData = createAsyncThunk(
  "job/fetchData",
  async (page: number) => {
    const res = await axios.get(
      `https://www.themuse.com/api/public/jobs?page=${page}&descending=true`
    );
    return res.data.results;
  }
);

export const JobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<JobType[]>) => {
      state.data = action.payload;
    },
    getFilteredData: (state, action: PayloadAction<JobType[]>) => {
      state.filteredData = action.payload;
    },
    // setDataForPage: (state, action: PayloadAction<{ page: number; data: JobType[] }>) => {
    //   state.pages[action.payload.page] = action.payload.data;
    // },
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchData.pending, (state: initialType) => {
      state.loading = true;
    });
    builder.addCase(
      fetchData.fulfilled,
      (state: initialType, action: PayloadAction<JobType[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.filteredData = [];
        state.error = " ";
      }
    );
    builder.addCase(
      fetchData.rejected,
      (state: initialType, action: PayloadAction<string>) => {
        state.loading = false;
        state.data = [];
        state.filteredData = [];
        state.error = action.payload;
      }
    );
  },
});

export const { getData, getFilteredData } = JobSlice.actions;

export default JobSlice.reducer;
