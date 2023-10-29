import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { JobType } from "../helpers/dumps";
import axios from "axios";

type initialType = {
  loading: boolean;
  data: JobType[];
  filteredData: JobType[];
  error: string;
  pages: any
};

const initialState: initialType = {
  loading: false,
  data: [],
  filteredData: [],
  error: "",
  pages: {},
};

// export const fetchData = createAsyncThunk("job/fetchData", async () => {
//   const res = await axios.get(
//     "https://www.themuse.com/api/public/jobs?page=1&descending=true"
//   );
//   // .then((response) => response.data.map((item: JobType) => item));

//   return res.data.results;
// });

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
    setDataForPage: (state, action: PayloadAction<{ page: number; data: JobType[] }>) => {
      state.pages[action.payload.page] = action.payload.data;
    },
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
    builder.addCase(fetchData.rejected, (state: initialType, action: any) => {
      state.loading = false;
      state.data = [];
      state.filteredData = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const { getData, getFilteredData,setDataForPage } = JobSlice.actions;

export default JobSlice.reducer;
