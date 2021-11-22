import React from "react";
import { Route, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import NewUserFormContainer from "../components/users/new_user_form_container";
import UserShowContainer from "../components/users/user_show_container";
import LoginFormContainer from "../components/sessions/login_form_container";
import SplashContainer from "../components/splash/splash_container";

const App = () => (
  <div>
    <h1>Hello still working!</h1>
    <Switch>
      <AuthRoute exact path="/signup" component={NewUserFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <Route to="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;