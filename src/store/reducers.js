import { GOT_USER_EMAIL, GOT_CHART_ONE, GOT_CHART_TWO } from "./actions";

export function userReducer(userEmail = "default@indeed.com", action) {
  switch (action.type) {
    // placeholder
    case GOT_USER_EMAIL:
      return action.userEmail;
    default:
      return userEmail;
  }
}

export function chartOneReducer(data = [], action) {
  switch (action.type) {
    case GOT_CHART_ONE:
      return action.data;
    default:
      return data;
  }
}

export function chartTwoReducer(data = [], action) {
  switch (action.type) {
    case GOT_CHART_TWO:
      return action.data;
    default:
      return data;
  }
}
