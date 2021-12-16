import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteConnections } from "../../actions/connection_actions";

class PendingIndexItem extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.pendingId);
  }

  render() {
    let { users, pendingId } = this.props;
    if (!users[pendingId]) return null;
    let pending = users[pendingId];

    return (
      <div className="pending-index-item">
        <div className="pending-header">
          <Link className="pending-image" to={`/users/${pendingId}`}>
            <img src={pending.profilePicture} />
          </Link>

          <div className="pending-titles">
            <Link
              to={`/users/${pendingId}`}
            >{`${pending.firstName} ${pending.lastName}`}</Link>
            <div>{pending.headline}</div>
          </div>
        </div>

        <div className="pending-buttons">
          <button onClick={() => this.handleClick("ignore", pending.id)}>Ignore</button>
          <button>Accept</button>
        </div>
      </div>
    );
  }

  handleClick(type, connectionId) {
    switch(type) {
      case "ignore":
        return this.props.deleteConnections(connectionId);
      case "accept":
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
  }
}

export default connect(mSTP, mDTP)(PendingIndexItem);