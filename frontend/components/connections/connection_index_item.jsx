import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { DEFAULT_PROFILE_PICTURE } from "../../util/images_and_icons_util";
import { deleteConnections } from "../../actions/connection_actions";

class ConnectionIndexItem extends React.Component {
  render() {
    let { currentUser, user, connectedUser } = this.props;

    return (
      <div className="connection-index-item">
        <div className="pending-header">
          <Link className="pending-image" to={`/users/${connectedUser.id}`}>
            <img src={connectedUser.profilePicture
              ? connectedUser.profilePicture
              : DEFAULT_PROFILE_PICTURE
            } />
          </Link>

          <div className="pending-titles">
            <Link
              to={`/users/${connectedUser.id}`}
            >{`${connectedUser.firstName} ${connectedUser.lastName}`}</Link>
            <div>{connectedUser.headline}</div>
          </div>
        </div>

        <div className="connection-buttons">
          {currentUser.id === user.id
            ? <button onClick={() => this.props.deleteConnections(connectedUser.id)}>Remove</button>
            : null}
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

const mDTP = (dispatch) => {
  return {
    deleteConnections: (connectionId) => dispatch(deleteConnections(connectionId)),
  };
}

export default connect(mSTP, mDTP)(ConnectionIndexItem);
