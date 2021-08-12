import React from "react";
import { Route } from "react-router-dom";

import { Home, Subscriptions } from "./components/index";

const BaseRouter = () => (
  <div>
    <Route path="/subscriptions" component={Subscriptions} />
    <Route exact path="/" component={Home} />
  </div>
);

export default BaseRouter;
