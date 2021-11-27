import React from "react";
import { Link } from "react-router-dom";
import * as UrlPath from "../../util/url_paths_util";
import { LOGO_URL, NAVICON_URL } from "../../util/logo_util";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let url = this.props.location.pathname;

    url === UrlPath.SPLASH ||
    url === UrlPath.LOGIN_FORM ||
    url === UrlPath.SIGNUP_FORM
      ? null
      : this.props.fetchUser(this.props.currentUserId);
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

  splashNavbar() {
    return (
      <div className="splash-navbar">
        <div className="splash-navbar-logo">
          <img src={LOGO_URL} />
        </div>

        <div className="splash-navbar-buttons">
          <div id="signup">
            <Link to={UrlPath.SIGNUP_FORM}>Join now</Link>
          </div>

          <div id="login">
            <Link to={UrlPath.LOGIN_FORM}>Sign in</Link>
          </div>
        </div>

      </div>
    );
  }

  loginNavbar() {
    return (
      <div className="login-navbar">
        <Link to={UrlPath.SPLASH}>
          <img src={LOGO_URL} />
        </Link>
      </div>
    );
  }

  signupNavbar() {
    return (
      <div className="signup-navbar">
          <Link to={UrlPath.SPLASH}>
            <img src={LOGO_URL}/>
          </Link>
      </div>
    );
  }

  sessionNavbar() {
    let { currentUserId, logout } = this.props;

    return (
      <div className="session-navbar">
        <div className="logo">
          <img src={NAVICON_URL} />
        </div>

        <div className="icons">
          <div id="feed">
            <Link to={UrlPath.FEED}>
              <img src="https://static.thenounproject.com/png/3574480-200.png" />
              <div>Home</div>
            </Link>
          </div>

          <div id="my-network">
            <Link to={UrlPath.MY_NETWORK}>
              <img src="https://icons-for-free.com/iconfiles/png/512/linkedin+network+users+icon-1320184664350339756.png" />
              <div>My Network</div>
            </Link>
          </div>

          <div id="profile">
            <Link to={`/users/${currentUserId}`}>
              <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
              <div id="dropdown">
                <div>Me</div>
                <img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" />
              </div>
            </Link>
          </div>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    );
  }
};