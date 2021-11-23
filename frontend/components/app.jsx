import React from "react";
import { Route, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import UserShowContainer from "../components/users/user_show_container";
import LoginFormContainer from "../components/sessions/login_form_container";
import SplashContainer from "../components/splash/splash_container";
import NavbarContainer from "../components/navbar/navbar_container";
import FeedContainer from "../components/feed/feed_container";
import SignupFormContainer from "./users/signup_form_container";


const App = () => (
  <div>
    <Route to="/" component={NavbarContainer} />
    <Switch>
      <AuthRoute exact path="/signup1" component={SignupFormContainer} />
      <AuthRoute exact path="/signup2" component={SignupFormContainer} />
      <AuthRoute exact path="/signup3" component={SignupFormContainer} />
      <AuthRoute exact path="/signup4" component={SignupFormContainer} />
      <AuthRoute exact path="/signup5" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/feed" component={FeedContainer} />
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <Route to="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;