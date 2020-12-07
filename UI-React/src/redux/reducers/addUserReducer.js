import * as actionTypes from "../actions/actionTypes";

export default function addUserReducer(state = false, action) {
  switch (action.type) {
    case actionTypes.ADD_USER_SUCCESS:
      return action.payload;
      case actionTypes.ADD_USER_FAILURE:
      return action.payload;
    default:
      return state;
  }
}
