import { ADD_USER_DATA } from "../Action/action_type";

const initialState = {};

export const addUserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_DATA:
      return { ...state, user: action.payload.data };
    default:
      return state;
  }
};
