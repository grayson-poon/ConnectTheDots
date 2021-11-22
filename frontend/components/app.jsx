import React from "react";
import { Route, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import NewUserFormContainer from "./users/new_user_form_container";
import UserShowContainer from "../components/users/user_show_container";
import LoginFormContainer from "../components/sessions/login_form_container";
import SplashContainer from "../components/splash/splash_container";
import NavbarContainer from "../components/navbar/navbar_container";
import FeedContainer from "../components/feed/feed_container";

const App = () => (
  <div>
    <Route to="/" component={NavbarContainer} />
    <Switch>
      <AuthRoute exact path="/signup" component={NewUserFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/feed" component={FeedContainer} />
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <Route to="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;