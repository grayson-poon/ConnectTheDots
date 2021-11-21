import React from "react";
import { Link } from "react-router-dom";

export default class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.user.id);
    debugger
  }

  render() {
    let { user } = this.props;

    return(
      <div>
        {user.email}
        {user.password}
        <Link to={"/"}>Sign Up Page</Link>
      </div>
    )
  }
};