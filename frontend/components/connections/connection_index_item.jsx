import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ConnectionIndexItem extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.connectionId);
  }

  render() {
    let { users, connectionId } = this.props;
    if (!users[connectionId]) return null;
    let connection = users[connectionId];

    return (
      <div className="connection-index-item">
        <div className="pending-header">
          <Link className="pending-image" to={`/users/${connectionId}`}>
            <img src={connection.profilePicture} />
          </Link>

          <div className="pending-titles">
            <Link
              to={`/users/${connectionId}`}
            >{`${connection.firstName} ${connection.lastName}`}</Link>
            <div>{connection.headline}</div>
          </div>
        </div>

        <div className="connection-buttons">
          <button>Remove</button>
        </div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    users: state.entities.users,
  };
};

export default connect(mSTP)(ConnectionIndexItem);
