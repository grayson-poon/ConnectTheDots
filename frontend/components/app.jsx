import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom"
import NewUserFormContainer from "../components/users/new_user_form_container";

const App = () => (
  <div>
    <h1>Hello still working!</h1>
    <Routes>
      <Route path="/" component={NewUserFormContainer} />
    </Routes>
  </div>
);

export default App;