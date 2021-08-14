import React from "react";
// import { Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";

import { Home, Profile } from "./components/index";

const BaseRouter = () => (
  <div>
    <Router>
      <NavLink to="/" className="nav-link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/profile" className="nav-link" activeClassName="active">
        Profile
      </NavLink>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </div>
);

export default BaseRouter;
