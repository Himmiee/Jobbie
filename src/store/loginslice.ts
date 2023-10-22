import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoginType = {
  isAuthenticated: boolean;
  loading: boolean;
  user: string | null;
  email: string;
  password: string;
  error: string | null;
};

const initialState: LoginType = {
  isAuthenticated: false,
  loading: false,
  user: null,
  email: "",
  password: "",
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { loginFailure, loginSuccess, loginStart, setEmail, setPassword } =
  loginSlice.actions;
export default loginSlice.reducer;
