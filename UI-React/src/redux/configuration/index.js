import { combineReducers } from "redux";
import userListReducer from "../reducers/userListReducer";
import addUserReducer from "../reducers/addUserReducer"

const rootReducer = combineReducers({
  userListReducer,
  addUserReducer
});

export default rootReducer;
