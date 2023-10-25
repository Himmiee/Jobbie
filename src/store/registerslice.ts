import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RegisterType = {
  isAuthenticated: boolean;
  loading: boolean;
  user: any | null;
  name: string ;
  email: string ;
  password: string ;
  error: string | null;
};

const initialState: RegisterType = {
  isAuthenticated: false,
  loading: false,
  user: null,
  name: "",
  email: "",
  password: "",
  error: null,
};

const registerSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    registrationStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registrationSuccess: (state, action: PayloadAction<any>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    registrationFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const {
  registrationFailure,
  registrationSuccess,
  registrationStart,
  setName,
  setEmail,
  setPassword,
} = registerSlice.actions;
export default registerSlice.reducer;
