import { UserType } from "@/types/UserType";
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

    logIn: (state, action: PayloadAction<UserType>) => {
      return {
        value: {
          isLogged: true,
          username: action.payload.username,
          phone: action.payload.phone,
          isModerator: false,
        },
      };
    },
  },
});

export const { logOut, logIn } = auth.actions;

export default auth.reducer;
