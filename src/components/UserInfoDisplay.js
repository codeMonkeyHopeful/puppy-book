import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrentUserInfo,
  updateUserProfileDisplay,
} from "../store/actionCreators";

const UserInfoDisplay = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.currentUser);

  useEffect(() => {
    console.log("Change");
  }, [userInfo]);

  const openProfileUpdate = () => {
    console.log("Clicked");
    dispatch(updateUserProfileDisplay(true));
  };

  return (
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h3 class="display-4">Your Current Profile</h3>
        <div className="form-group">
          <p id="user-name">
            <b>Name:</b> {userInfo.name}
          </p>
          <p id="user-name">
            <b>Username:</b> {userInfo.userName}
          </p>
          <p id="user-email">
            <b>Email:</b> {userInfo.userEmail}
          </p>
          <p id="user-location">
            <b>Location:</b> {userInfo.userLocation}
          </p>
          <p id="user-subscription">
            You currently <b>{userInfo.subscription ? "ARE " : "ARE NOT "}</b>
            subscribed to "Refined Pup Monthly".
          </p>
        </div>
      </div>
      <div className="button-container">
        <button
          type="button"
          className="btn btn-primary"
          onClick={openProfileUpdate}
        >
          Change my profile
        </button>
      </div>
    </div>
  );
};

export default UserInfoDisplay;
