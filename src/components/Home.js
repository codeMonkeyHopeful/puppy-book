import React, { useEffect, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../store/actionCreators";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.currentUser).userName;

  useEffect(() => {
    // console.log(`change to ${userName}`);
  }, [userName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUserName(e.target.user_input.value));
  };

  return (
    <div>
      <div className="text-center">
        <h1>Welcome to PuppyBook!</h1>
      </div>
      <div className="centered" id="home-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="user_input">What is your UserName?</label>
            <input type="text" id="user_input" className="form-control"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
