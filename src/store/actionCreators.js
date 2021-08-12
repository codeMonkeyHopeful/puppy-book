/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
// Put all action creators here
// Action Creators will triger off the state/store to update the data stored
import axios from "axios";

import {
  GOT_USER_NAME,
  GOT_USER_DATA,
  GOT_USER_SUBSCRIPTIONS,
} from "./actions";

// export function getUserEmail(id) {
//     return (dispatch) => {
//         // axios
//         //     .get(`/api/userldap`)
//         //     .then((response) => {
//         //         dispatch(gotUserEmail(response.data));
//         //     })
//         //     .catch((e) => console.log('get User Email Error: ', e));
//         dispatch(gotUserEmail('ryan'));
//     };
// }

export function getUserName(user) {
  return (dispatch) => {
    let userName = user;
    dispatch(gotUserName(userName));
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
// export function getChartOne() {
//     return (dispatch) => {
//         const randArr = [];
//         const count = 6;
//         for (let i = 0; i < count; i++) {
//             randArr.push(Math.floor(Math.random() * 11));
//         }
//         dispatch(gotChartOne(randArr));
//     };
// }

// export const gotChartOne = (data) => {
//     const action = {
//         type: GOT_CHART_ONE,
//         data,
//     };
//     return action;
// };

// export function getChartTwo() {
//     return (dispatch) => {
//         const randArr = [];
//         const count = 6;
//         for (let i = 0; i < count; i++) {
//             randArr.push(Math.floor(Math.random() * 11));
//         }
//         dispatch(gotChartTwo(randArr));
//     };
// }

// export const gotChartTwo = (data) => {
//     const action = {
//         type: GOT_CHART_TWO,
//         data,
//     };
//     return action;
// };
