import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
          <button>Ignore</button>
          <button>Accept</button>
        </div>
      </div>
    );
  }
};

const mSTP = (state) => {
  return {
    users: state.entities.users,
  }
};

export default connect(mSTP)(PendingIndexItem);