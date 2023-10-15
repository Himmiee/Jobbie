import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { JobType } from "../helpers/dumps";
import axios from "axios";

type initialType = {
  loading: boolean;
  data: JobType[];
  error: string;
};

const initialState: initialType = {
  loading: false,
  data: [],
  error: "",
};

// const initialState: JobType = {
//   contents: " ",
//   name: " ",
//   type: " ",
//   publication_date: " ",
//   short_name: " ",
//   model_type: " ",
//   id: 0,
//   locations: [],
//   categories: [],
//   levels: [],
//   tags: [],
//   refs: { landing_page: " " },
//   company: { id: 0, short_name: "", name: "" },
// };

export const fetchData = createAsyncThunk("job/fetchData", async () => {
  const res = await axios
    .get("https://www.themuse.com/api/public/jobs?page=1&descending=true")
    // .then((response) => response.data.map((item: JobType) => item));
    const data = res.data
    return data
});

export const  JobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
  },
  extraReducers: (builder: any) => {
  builder.addCase(fetchData.pending, (state: initialType) => {
      state.loading = true;
  })
  builder.addCase(fetchData.fulfilled, (state: initialType, action: PayloadAction<[]>) => {
    state.loading = false;
    state.data = state.data.concat(action.payload)
    state.error = " "
  })
  builder.addCase(fetchData.rejected, (state: initialType, action : any) => {
    state.loading = false;
    state.data = []
    state.error = action.error.message || "Something went wrong"
  
  })
}
});

// export const { } = jobSlice.actions

export default JobSlice.reducer
