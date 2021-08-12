import React from "react";
import { Route } from "react-router-dom";
// import Hoc from "./hoc/hoc";

// import Login from "./containers/Login";
// import Signup from "./containers/Signup";
// import HomepageLayout from "./containers/Home";
import Home from "../src/components/Home";

const BaseRouter = () => (
  <div>
    {/* <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} /> */}
    <Route exact path="/" component={Home} />
  </div>
);

export default BaseRouter;
