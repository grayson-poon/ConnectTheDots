import React from "react";

export default class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  displayErrors() {
    debugger

    return (
      <div>
        <ul>
          {this.props.errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    let { user } = this.props;

    return (user && this.props.errors) ? (
      <div>
        {user ? (
          <>
            {user.firstName}
            {user.lastName}
            {user.currentLocation}
          </>
        ) : (
          <>
            {this.displayErrors()}
          </>
        )}
      </div>
    ) : (
      <div>
        loading...
      </div>
    )
  }
};