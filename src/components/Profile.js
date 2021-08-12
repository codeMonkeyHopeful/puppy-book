import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserInfo } from "../store/actionCreators";
import UserInfoDisplay from "./UserInfoDisplay";
import ProfileUpdateForm from "./ProfileUpdateForm";

const Profile = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.currentUser).userName;
  const display = false;

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
      {display ? (
        <div>
          <UserInfoDisplay />

          <ProfileUpdateForm />
        </div>
      ) : (
        <UserInfoDisplay />
      )}
    </div>
  );
};

export default Profile;
