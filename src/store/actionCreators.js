/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
// Put all action creators here
// Action Creators will triger off the state/store to update the data stored
import axios from "axios";

import {
  GOT_USER_NAME,
  GOT_USER_DATA,
  UPDATE_USER_PROFILE_DISPLAY,
  GOT_USER_SUBSCRIPTIONS,
  UPDATE_USER_PROFILE_DETAILS,
} from "./actions";

export function getUserName(user) {
  return (dispatch) => {
    axios
      .get(`http://localhost:8000/api/login/${user}`)
      .then((response) => {
        dispatch(gotUserName(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
export const gotUserName = (userName) => {
  const action = {
    type: GOT_USER_NAME,
    userName: userName,
  };
  return action;
};

export function getCurrentUserInfo(user) {
  return (dispatch) => {
    axios
      .get(`http://localhost:8000/api/user/getprofile/${user}`)
      .then((response) => {
        const userInfoJSON = JSON.parse(response.data);
        dispatch(gotCurrentUserInfo(userInfoJSON));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function gotCurrentUserInfo(userData) {
  const action = {
    type: GOT_USER_DATA,
    userData: userData,
  };
  return action;
}

export function updateUserProfileDisplay(displayStatus) {
  return (dispatch) => {
    dispatch(updateUserProfileAction(displayStatus));
  };
}

export function updateUserProfileAction(display) {
  const action = {
    type: UPDATE_USER_PROFILE_DISPLAY,
    display: display,
  };
  return action;
}

export function postUpdateUserProfile(userData) {
  //axios call here and use the response to populate
  return (dispatch) => {
    axios
      .get("http://localhost:8000/api/user/update-profile", {
        params: { userData: userData },
      })
      .then((response) => {
        const userResponseJSON = JSON.parse(response.data);
        dispatch(gotUpdateUserProfile(userResponseJSON));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function gotUpdateUserProfile(userData) {
  const action = {
    type: UPDATE_USER_PROFILE_DETAILS,
    userData: userData,
  };
  return action;
}
