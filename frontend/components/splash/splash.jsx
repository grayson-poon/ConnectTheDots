import { Link } from "react-router-dom";
import React from "react";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/feed">ConnectTheDots</Link>
        <h1>Welcome to your professional community</h1>
      </div>
    )
  }
};