import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserInfo } from "../store/actionCreators";

const Profile = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.currentUser).userName;

  useEffect(() => {
    dispatch(getCurrentUserInfo(userName));
  }, []);

  return <div>Need to add the form here</div>;
};

export default Profile;
