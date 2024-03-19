import { UserReducerActionTypes } from "./action-types";

const initialState = {
  user: null,
  error: null,
  isLoging: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserReducerActionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoging: true,
      };
    case UserReducerActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        isLoging: false,
      };
    case UserReducerActionTypes.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
