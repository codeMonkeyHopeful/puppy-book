import React from "react";
import { Route } from "react-router-dom";

import { Home, Profile } from "./components/index";

const BaseRouter = () => (
  <div>
    <Route path="/profile" component={Profile} />
    <Route exact path="/" component={Home} />
  </div>
);

export default BaseRouter;
