import {
  GOT_USER_NAME,
  GOT_USER_DATA,
  GOT_USER_SUBSCRIPTIONS,
} from "./actions";

const userDataDefault = {
  userName: "",
  userId: null,
  userEmail: "",
  userLocation: "",
};
export function userReducer(userData = userDataDefault, action) {
  switch (action.type) {
    case GOT_USER_NAME:
      return {
        ...userData,
        userName: action.userName,
      };
    case GOT_USER_DATA:
      return {
        ...userData,
        userId: action.userData.userId,
        userEmail: action.userData.userEmail,
        userLocation: action.userData.userLocation,
      };
    default:
      return userData;
  }
}

export function subscriptionReducer(subscriptions = [], action) {
  switch (action.type) {
    case GOT_USER_SUBSCRIPTIONS:
      return;
  }
}
