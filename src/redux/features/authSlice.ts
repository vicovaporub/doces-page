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
      localStorage.removeItem("auth");
      return initialState;
    },

    logIn: (state, action: PayloadAction<UserType>) => {
      const newState = {
        value: {
          isLogged: true,
          username: action.payload.username,
          phone: action.payload.phone,
          isModerator:
            action.payload.isModerator !== undefined
              ? action.payload.isModerator
              : false,
        },
      };
      localStorage.setItem("auth", JSON.stringify(newState.value));
      return newState;
    },

    loadAuthState: (state) => {
      const storedAuthState = localStorage.getItem("auth");
      if (storedAuthState) {
        return {
          value: JSON.parse(storedAuthState),
        };
      }
      return state;
    },
  },
});

export const { logOut, logIn, loadAuthState } = auth.actions;

export default auth.reducer;
