import { Link } from "react-router-dom";
import React from "react";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">ConnectTheDots</Link>
        <h1>Welcome to your professional community</h1>
        <Link to="/signup">Join now</Link>
        <Link to="/login">Sign in</Link>
      </div>
    )
  }
};