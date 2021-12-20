import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { DEFAULT_PROFILE_PICTURE } from "../../util/images_and_icons_util";
import { deleteConnections } from "../../actions/connection_actions";

class ConnectionIndexItem extends React.Component {
  render() {
    let { user } = this.props;

    return (
      <div className="connection-index-item">
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

        <div className="connection-buttons">
          <button onClick={() => this.props.deleteConnections(user.id)}>Remove</button>
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
