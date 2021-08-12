import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserInfo } from "../store/actionCreators";

const Subscriptions = () => {
  const dispatch = useDispatch();
  // THIS SECTION USED FOR TESTING
  const user = useSelector((state) => state.currentUser).userName;

  useEffect(() => {
    dispatch(getCurrentUserInfo("Brady"));
  }, []);

  return <button></button>;
};

export default Subscriptions;
