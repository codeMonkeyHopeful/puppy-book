import {
  GOT_USER_NAME,
  GOT_USER_DATA,
  UPDATE_USER_PROFILE_DISPLAY,
  GOT_USER_SUBSCRIPTIONS,
  UPDATE_USER_PROFILE_DETAILS,
} from "./actions";

const userDataDefault = {
  userName: "", //non-modifiable
  userId: null, //non-modifiable can be used int he larger app to track
  userEmail: "",
  userLocation: "",
  subscription: 0, //Binary, is the user willing to receive Refined Pup Monthly?
  name: "",
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
    case UPDATE_USER_PROFILE_DETAILS:
      return {
        ...userData,
        userEmail: action.userData.userEmail
          ? action.userData.userEmail
          : userData.userEmail,
        userLocation: action.userData.userLocation
          ? action.userData.userLocation
          : userData.userLocation,
        subscription: action.userData.subscription
          ? action.userData.subscription
          : userData.subscription,
        name: action.userData.name ? action.userData.name : userData.name,
      };
    default:
      return userData;
  }
}

const settingsDefault = {
  profileUpdate: false, //Triggers whether or not we are displaying profile ProfileUpdateForm component
};
export function settingsReducer(settings = settingsDefault, action) {
  switch (action.type) {
    case UPDATE_USER_PROFILE_DISPLAY:
      return {
        ...settings,
        profileUpdate: action.display,
      };
    default:
      return settings;
  }
}

export function subscriptionReducer(subscriptions = [], action) {
  switch (action.type) {
    case GOT_USER_SUBSCRIPTIONS:
      return;
  }
}
