import React from "react";
import { Route, Switch } from "react-router";
import NewUserFormContainer from "../components/users/new_user_form_container";

const App = () => (
  <div>
    <h1>Hello still working!</h1>
    <Switch>
      <Route path="/" component={NewUserFormContainer} />
    </Switch>
  </div>
);

export default App;