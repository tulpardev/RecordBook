import * as actionTypes from "../actions/actionTypes";
import initialState from "./initalState";

export default function userListReducer(state = initialState.users, action) {
  switch (action.type) {
    case actionTypes.GET_USER_LIST:
      console.log("asdsa")
      return action.payload;
    default:
      return state;
  }
}
