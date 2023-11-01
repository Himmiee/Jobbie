import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserData = {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
};
type LoginType = {
  isAuthenticated: boolean;
  loading: boolean;
  user: UserData[] | null;
  email: string;
  password: string;
  popupMessage: string;
  error: string | null;
};

const initialState: LoginType = {
  isAuthenticated: false,
  loading: false,
  user: null,
  email: "",
  password: "",
  popupMessage: "",
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
    loginSuccess: (state, action: PayloadAction<UserData[]>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.popupMessage = "Login successful";
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.popupMessage = action.payload;
      state.error = action.payload;
    },
    logOut: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.popupMessage = "Logout successful";
      state.user = null;
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
  loginFailure,
  loginSuccess,
  loginStart,
  setEmail,
  setPassword,
  logOut,
} = loginSlice.actions;
export default loginSlice.reducer;
