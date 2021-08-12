import { combineReducers } from "redux";

// import individual reducers here
import { userReducer, chartOneReducer, chartTwoReducer } from "./reducers";

// create the state's shape and data
const rootReducer = combineReducers({
  currentUser: userReducer,
  chartOne: chartOneReducer,
  chartTwo: chartTwoReducer,
});

export default rootReducer;
