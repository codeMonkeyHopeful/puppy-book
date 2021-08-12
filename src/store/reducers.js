import {
  GOT_USER_NAME,
  GOT_USER_DATA,
  UPDATE_USER_PROFILE_DISPLAY,
  GOT_USER_SUBSCRIPTIONS,
} from "./actions";

const userDataDefault = {
  userName: "name", //non-modifiable
  userId: null, //non-modifiable can be used int he larger app to track
  userEmail: "email",
  userLocation: "location",
  subscription: 0, //Binary, is the user willing to receive Refined Pup Monthly?
  name: "Brady",
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
