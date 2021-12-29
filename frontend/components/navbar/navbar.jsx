import React from "react";
import { Link } from "react-router-dom";
import * as UrlPath from "../../util/url_paths_util";
import ProfileDropdown from "../modals/profile_dropdown";
import {
  DEFAULT_PROFILE_PICTURE,
  DROPDOWN_ICON, HOME_ICON, 
  LOGO_URL, 
  MY_NETWORK_ICON, 
  NAVICON_URL 
} from "../../util/images_and_icons_util";
import SearchBarContainer from "../search/search_bar_container";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      profileDropdown: false,
    };
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    if (!this.props.currentUser && this.props.currentUserId) {
      this.props.fetchUser(this.props.currentUserId);
    }

    this.setState({ profileDropdown: false });
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.setState({ profileDropdown: false });
    }
  }

  render() {
    switch (this.props.url) {
      case UrlPath.SPLASH:
        return this.splashNavbar();
      case UrlPath.LOGIN_FORM:
        return this.loginNavbar();
      case UrlPath.SIGNUP_FORM:
        return this.signupNavbar();
      default:
        if (!this.props.currentUser) return null;
        return this.sessionNavbar();
    }
  }

  showModal(event) {
    event.preventDefault();
    this.setState({
      profileDropdown: this.state.profileDropdown ? false : true,
    });
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
          <img src={LOGO_URL} />
        </Link>
      </div>
    );
  }

  sessionNavbar() {
    let { currentUser, logout } = this.props;

    return (
      <div className="session-navbar">
        <div className="logo">
          <Link to={UrlPath.FEED}>
            <img src={NAVICON_URL} />
          </Link>
        </div>

        <SearchBarContainer currentUser={currentUser} />

        <div className="icons">
          <div id="feed">
            <Link to={UrlPath.FEED}>
              <img src={HOME_ICON} />
              <div>Home</div>
            </Link>
          </div>

          <div id="my-network">
            <Link to={UrlPath.MY_NETWORK}>
              <img src={MY_NETWORK_ICON} />
              <div>My Network</div>
            </Link>
          </div>

          <div id="profile">
            <button onClick={this.showModal}>
              <div id="image-box">
                <img
                  src={
                    currentUser.profilePicture
                      ? currentUser.profilePicture
                      : DEFAULT_PROFILE_PICTURE
                  }
                />
              </div>

              <div id="dropdown">
                <div>Me</div>
                <img src={DROPDOWN_ICON} />
              </div>
            </button>
          </div>

          {this.state.profileDropdown ? (
            <ProfileDropdown
              currentUser={currentUser}
              logout={logout}
              showModal={this.showModal}
            />
          ) : null}
        </div>
      </div>
    );
  }
};