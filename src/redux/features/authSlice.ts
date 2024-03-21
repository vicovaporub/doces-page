import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isLogged: false,
    username: "",
    phone: "",
    isModerator: false,
  },
};

export const auth = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logOut: () => {
      return initialState;
    },

    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isLogged: true,
          username: "",
          phone: action.payload,
          isModerator: false,
        },
      };
    },
  },
});

export const { logOut, logIn } = auth.actions;

export default auth.reducer;
