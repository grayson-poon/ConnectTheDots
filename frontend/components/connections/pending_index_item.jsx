import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createConnection, deleteConnections } from "../../actions/connection_actions";
import { DEFAULT_PROFILE_PICTURE } from "../../util/images_and_icons_util";

class PendingIndexItem extends React.Component {
  render() {
    let { user } = this.props;

    return (
      <div className="pending-index-item">
        <div className="pending-header">
          <Link className="pending-image" to={`/users/${user.id}`}>
            <img src={user.profilePicture
              ? user.profilePicture
              : DEFAULT_PROFILE_PICTURE
            } />
          </Link>

          <div className="pending-titles">
            <Link
              to={`/users/${user.id}`}
            >{`${user.firstName} ${user.lastName}`}</Link>
            <div>{user.headline}</div>
          </div>
        </div>

        <div className="pending-buttons">
          <button onClick={() => this.handleClick("ignore", user.id)}>Ignore</button>
          <button onClick={() => this.handleClick("accept", user.id)}>Accept</button>
        </div>
      </div>
    );
  }

  handleClick(type, connectionId) {
    switch(type) {
      case "ignore":
        return this.props.deleteConnections(connectionId);
      case "accept":
        return this.props.createConnection(connectionId);
      default:
        return;
    }
  }
};

const mSTP = (state) => {
  return {
    users: state.entities.users,
  }
};

const mDTP = (dispatch) => {
  return {
    deleteConnections: (connectionId) => dispatch(deleteConnections(connectionId)),
    createConnection: (connectionId) => dispatch(createConnection(connectionId)),
  }
}

export default connect(mSTP, mDTP)(PendingIndexItem);