import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type UserRegData = {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
};

type RegisterType = {
  isAuthenticated: boolean;
  loading: boolean;
  user: UserRegData[] | null;
  name: string;
  email: string;
  popupMessage: string;
  password: string;
  error: string | null;
};

const initialState: RegisterType = {
  isAuthenticated: false,
  loading: false,
  user: null,
  name: "",
  email: "",
  password: "",
  popupMessage: "",
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
    registrationSuccess: (state, action: PayloadAction<UserRegData[]>) => {
      state.isAuthenticated = true;
      state.user = action.payload
      state.loading = false;
      state.popupMessage = "Registration Successful";
      state.error = null;
    },
    registrationFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.popupMessage = action.payload;
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
