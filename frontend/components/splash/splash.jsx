import React from "react";
import { Link } from "react-router-dom";
import { SPLASH_COMPONENT_1 } from "../../util/images_and_icons_util";
import { SIGNUP_FORM } from "../../util/url_paths_util";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-container">

        <div className="splash-component-1">
          <h1>Welcome to your professional community</h1>
          <img
            src={SPLASH_COMPONENT_1}
          />
        </div>

        <div className="splash-component-2">
          <h1>
            Join your colleagues, classmates, and friends on ConnectTheDots
          </h1>

          <div className="signup-link">
            <Link to={SIGNUP_FORM}>Get Started</Link>
          </div>
        </div>
      </div>
    );
  }
};