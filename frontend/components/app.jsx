import React from "react";
import { Route, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import * as UrlPath from "../util/url_paths_util";

import NavbarContainer from "../components/navbar/navbar_container";
import SignupFormContainer from "./sessions/signup_form_container";
import LoginFormContainer from "../components/sessions/login_form_container";
import FeedContainer from "../components/feed/feed_container";
import ProfilePageContainer from "./users/profile_page_container";
import SplashContainer from "../components/splash/splash_container";
import FooterContainer from "../components/footer/footer_container";
import Modal from "./modals/modal";
import NetworkContainer from "./network/network_container";
import PostIndexContainer from "./feed/posts/post_index_container";

const App = () => (
  <div className="page-container">
    <Modal />
    <Route path={UrlPath.SPLASH} component={NavbarContainer} />
    <Switch>
      <ProtectedRoute path={UrlPath.ACTIVITY} component={PostIndexContainer} />
      <AuthRoute exact path={UrlPath.SIGNUP_FORM} component={SignupFormContainer} />
      <AuthRoute exact path={UrlPath.LOGIN_FORM} component={LoginFormContainer} />
      <ProtectedRoute path={UrlPath.FEED} component={FeedContainer} />
      <ProtectedRoute path={UrlPath.MY_NETWORK} component={NetworkContainer} />
      <ProtectedRoute path={UrlPath.OTHER_NETWORK} component={NetworkContainer} />
      <ProtectedRoute path={UrlPath.USER_SHOW} component={ProfilePageContainer} />
      <AuthRoute exact path={UrlPath.SPLASH} component={SplashContainer} />
    </Switch>
    <Route path={UrlPath.SPLASH} component={FooterContainer} />
  </div>
);

export default App;