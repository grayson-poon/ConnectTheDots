import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.displayIcons = this.displayIcons.bind(this);
  }

  displayIcons() {
    let { currentUserId, logout } = this.props;

    return currentUserId ? (
      <div>
        <Link to="/feed">Home</Link>
        <Link to={`/`}>My Network</Link>
        <Link to={`/users/${currentUserId}`}>Profile</Link>
        <button onClick={logout}>Logout</button>
      </div>
    ) : (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>ConnectTheDots</h1>
        <div>
          {this.displayIcons()}
        </div>
      </div>
    )
  }
}