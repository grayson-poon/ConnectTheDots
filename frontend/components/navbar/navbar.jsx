import React from "react";
import { Link } from "react-router-dom";
import * as UrlPath from "../../util/url_paths_util";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionNavbar() {
    let { currentUserId, logout } = this.props;

    return (
      <div className="session-navbar">
        <Link to={UrlPath.FEED}>Home</Link>
        <Link to={UrlPath.MY_NETWORK}>My Network</Link>
        <Link to={`/users/${currentUserId}`}>Profile</Link>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  splashNavbar() {
    return (
      <div className="splash-navbar">
        <Link to={UrlPath.FEED}>
          <img src="" alt="logo" />
        </Link>

        <div className="splash-navbar-buttons">
          <Link to={UrlPath.SIGNUP_FORM}>Join now</Link>
          <Link to={UrlPath.LOGIN_FORM}>Sign in</Link>
        </div>
      </div>
    );
  }

  loginNavbar() {
    return (
      <div className="login-navbar">
        <Link to={UrlPath.SPLASH}><img src="" alt="" />ConnectTheDots</Link>
      </div>
    )
  }

  signupNavbar() {
    return (
      <div className="signup-navbar">
        <div className="signup-navbar-logo">
          <Link to={UrlPath.SPLASH}>
            <img src="" alt="" />
            ConnectTheDots
          </Link>
        </div>

        <div className="signup-navbar-message">
          <h1>Make the most out of your professional life</h1>
        </div>
      </div>
    );
  }

  render() {
    let url = this.props.location.pathname;

    switch (url) {
      case UrlPath.SPLASH:
        return this.splashNavbar();
      case UrlPath.LOGIN_FORM:
        return this.loginNavbar();
      case UrlPath.SIGNUP_FORM:
        return this.signupNavbar();
      default:
        return this.sessionNavbar();
    }
  }
};