import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUserProfileDisplay,
  postUpdateUserProfile,
} from "../store/actionCreators";

const ProfileUpdateForm = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.currentUser).userName;

  function onSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const userLocation = e.target.location.value;
    const subscription = e.target.subscribe.checked; //Treat as checkbox NOT text
    const name = e.target.name.value;
    const userData = {
      userEmail: email,
      userLocation: userLocation,
      subscription: subscription,
      name: name,
    };

    dispatch(postUpdateUserProfile(userData));
    dispatch(updateUserProfileDisplay(false));
  }

  return (
    <div id="update-profile-form-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Your new email..."
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            maxLength="30"
            className="form-control"
            id="location"
            placeholder="Your new location..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            maxLength="30"
            className="form-control"
            id="name"
            placeholder="Your new name... Wait...Why do you need a new name?!"
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="subscribe" />
          <label className="subscribe" htmlFor="exampleCheck1">
            Subscribe to Refined Pup Monthly
          </label>
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdateForm;
