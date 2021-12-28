import React from "react";
import { DROPDOWN_ICON } from "../../util/images_and_icons_util";
import { MY_NETWORK } from "../../util/url_paths_util";
import ConnectionIndexItem from "../connections/connection_index_item";
import PendingIndexItem from "../connections/pending_index_item";

export default class Network extends React.Component {
  componentDidMount() {
    let { url, fetchUser, fetchConnections, currentUserId } = this.props;

    switch (url) {
      case MY_NETWORK:
        return fetchConnections(currentUserId);
      default:
        fetchUser(this.props.match.params.id);
        return fetchConnections(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    let { fetchConnections, fetchUser, currentUserId } = this.props;

    if (prevProps.location.pathname !== this.props.location.pathname) {
      switch(this.props.location.pathname) {
        case MY_NETWORK:
          return fetchConnections(currentUserId);
        default:
          fetchUser(this.props.match.params.id);
          return fetchConnections(this.props.match.params.id);
      }
    }
  }

  render() {
    let { url } = this.props;

    switch (url) {
      case MY_NETWORK:
        return this.myNetwork();
      default:
        return this.otherNetwork();
    }
  }

  otherNetwork() {
    let { user, users } = this.props;
    if (!user || !user.connectionIds.every((id) => users[id])) {
      return null;
    }

    return (
      <div className="network-page">
        <div className="gray-background"></div>
        {user.connectionIds.length === 0
          ? this.zeroConnections()
          : this.moreThanZeroConnections(user)}
      </div>
    );
  }

  myNetwork() {
    let { currentUser, users } = this.props;

    if (
      !currentUser ||
      !currentUser.connectionIds.every((id) => users[id]) ||
      !currentUser.pendingIds.every((id) => users[id])
    ) {
      return null;
    }

    return (
      <div className="network-page">
        <div className="gray-background"></div>
        {currentUser.pendingIds.length === 0
          ? this.zeroPending()
          : this.moreThanZeroPending()}

        {currentUser.connectionIds.length === 0
          ? this.zeroConnections()
          : this.moreThanZeroConnections(currentUser)}
      </div>
    );
  }

  zeroConnections() {
    return (
      <div className="connections-index">
        <div>Connections</div>
        <div className="zero">No connections yet!</div>
      </div>
    );
  }

  moreThanZeroConnections(user) {
    let { currentUser, users } = this.props;

    return (
      <div className="connections-index">
        <div>{user.connectionIds.length} Connections</div>
        {/* <div className="connections-filter">
          <div>Sort by:</div>
          <button>Dropdown</button>
          <div>
            <img src={DROPDOWN_ICON} />
          </div>
        </div> */}
        <div className="connections-list">
          <ul>
            {user.connectionIds.map((connectionId, idx) => (
              <ConnectionIndexItem
                key={idx}
                connectedUser={users[connectionId]}
                user={user}
                currentUser={currentUser}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }

  zeroPending() {
    return (
      <div className="pending-connections-index">
        <div>Invitations</div>
        <div className="zero-pending">No pending invitations!</div>
      </div>
    );
  }

  moreThanZeroPending() {
    let { currentUser, users } = this.props;

    return (
      <div className="pending-connections-index">
        <div>Invitations</div>
        <div className="pending-list">
          <ul>
            {currentUser.pendingIds.map((pendingId, idx) => (
              <PendingIndexItem
                key={idx}
                user={users[pendingId]}
                currentUser={currentUser}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
};