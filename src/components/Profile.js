import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrentUserInfo,
  updateUserProfileDisplay,
} from "../store/actionCreators";
import UserInfoDisplay from "./UserInfoDisplay";
import ProfileUpdateForm from "./ProfileUpdateForm";

const Profile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.currentUser);
  const display = useSelector((state) => state.settings).profileUpdate;

  useEffect(() => {
    dispatch(getCurrentUserInfo(userInfo.userName));
  }, []);

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
