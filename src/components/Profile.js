import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserInfo } from "../store/actionCreators";
import UserInfoDisplay from "./UserInfoDisplay";

const Profile = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.currentUser).userName;

  useEffect(() => {
    dispatch(getCurrentUserInfo(userName));
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const userLocation = e.target.location.value;
    // dispatch(updateUserInfo)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Your new email..."
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="location">Password</label>
          <input
            type="text"
            maxLength="30"
            class="form-control"
            id="location"
            placeholder="Your new location..."
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="subscribe" />
          <label class="subscribe" for="exampleCheck1">
            Subscribe to Refined Pup Monthly
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
        <UserInfoDisplay />
      </div>
    </div>
  );
};

export default Profile;
