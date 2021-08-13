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
        console.log(response.data);
        dispatch(gotUserName(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
    // let userName = user;
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
    let userData = {
      userId: 1234,
      userEmail: "brady@gmail.com",
      userLocation: "Barkerville, OH",
    };
    dispatch(gotCurrentUserInfo(userData));
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
    dispatch(gotUpdateUserProfile(userData));
  };
}

export function gotUpdateUserProfile(userData) {
  const action = {
    type: UPDATE_USER_PROFILE_DETAILS,
    userData: userData,
  };
  return action;
}
