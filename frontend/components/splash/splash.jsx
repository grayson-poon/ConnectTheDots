import React from "react";
import { Link } from "react-router-dom";
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
            src="https://github.com/grayson-poon/ConnectTheDots/blob/main/app/assets/images/office-stock-5.png?raw=true"
            alt="woman"
          />
        </div>

        <div className="splash-component-2">
          
          <img
            src="https://github.com/grayson-poon/ConnectTheDots/blob/main/app/assets/images/splash-collage.jpg?raw=true"
            alt="splash-collage"
          />
          
          <h1>
            Join your colleagues, classmates, and friends on ConnectTheDots{" "}
          </h1>

          <div>
            <Link to={SIGNUP_FORM}>Get Started</Link>
          </div>
        </div>
      </div>
    );
  }
};