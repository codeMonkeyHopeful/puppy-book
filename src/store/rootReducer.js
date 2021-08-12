import { combineReducers } from "redux";

// import individual reducers here
import { userReducer, settingsReducer } from "./reducers";

// create the state's shape and data
const rootReducer = combineReducers({
  currentUser: userReducer,
  settings: settingsReducer,
  // add user subs here
});

export default rootReducer;
