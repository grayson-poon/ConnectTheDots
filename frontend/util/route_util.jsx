import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router";
import { SPLASH, LOGIN_FORM } from "./url_paths_util";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Redirect to={SPLASH} />
    ) : (
      <Component {...props} />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={LOGIN_FORM} />
    )
  )} />
);

const mSTP = (state) => {
  return ({
    loggedIn: Boolean(state.session.currentUserId),
  })
};

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));