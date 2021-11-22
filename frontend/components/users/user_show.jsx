import React from "react";

export default class UserShow extends React.Component {
  componentDidMount() {
    if (!this.props.user) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  render() {
    let { user } = this.props;

    return(
      <div>
        {user.firstName}
        {user.lastName}
        {user.currentLocation}
      </div>
    )
  }
};