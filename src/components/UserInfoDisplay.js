import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserInfo } from "../store/actionCreators";

const UserInfoDisplay = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.currentUser);

  useEffect(() => {
    console.log("Change");
  }, [userInfo]);

  const openProfileUpdate = () => {
    console.log("Clicked");
  };

  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Your Current Profile</h1>
        <div className="form-group">
          <p id="user-name">Name: {userInfo.name}</p>
          <p id="user-name">Username: {userInfo.userName}</p>
          <p id="user-email">Email: {userInfo.userEmail}</p>
          <p id="user-location">Location: {userInfo.userLocation}</p>
          <p id="user-subscription">
            You currently <b>{userInfo.subscription ? "ARE" : "ARE NOT"}</b>
            subscribed to "Refined Pup Monthly".
          </p>
        </div>
      </div>
      <button type="button" onClick={openProfileUpdate}>
        Change my profile
      </button>
    </div>
  );
};

export default UserInfoDisplay;
