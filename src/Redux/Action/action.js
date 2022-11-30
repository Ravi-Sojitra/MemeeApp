import { ADD_USER_DATA } from "./action_type";

export const addUserData = (data) => {
  return {
    type: ADD_USER_DATA,
    payload: data,
  };
};
