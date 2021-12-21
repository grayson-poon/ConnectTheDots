import React from "react";
import { DROPDOWN_ICON } from "../../util/images_and_icons_util";
import { MY_NETWORK } from "../../util/url_paths_util";
import ConnectionIndexItem from "../connections/connection_index_item";
import PendingIndexItem from "../connections/pending_index_item";

export default class Network extends React.Component {
  componentDidMount() {
    let { url, fetchConnections, currentUserId } = this.props;
    
    switch(url) {
      case MY_NETWORK:
        return fetchConnections(currentUserId);
      default:
        return;
    }
  }

  render() {
    let { currentUser, users } = this.props;
    if (!currentUser || Object.keys(users).length <
      currentUser.pendingIds.length + currentUser.connectionIds.length + 1
    ) return null;

    
    return (
      <div className="network-page">
        <div className="gray-background"></div>
        {currentUser.pendingIds.length === 0
          ? this.zeroPending()
          : this.moreThanZeroPending()
        }

        {currentUser.connectionIds.length === 0
          ? this.zeroConnections()
          : this.moreThanZeroConnections()
        }
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
              <PendingIndexItem key={idx} user={users[pendingId]} currentUser={currentUser} />
            ))}
          </ul>
        </div>
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

  moreThanZeroConnections() {
    let { currentUser, users } = this.props;

    return (
      <div className="connections-index">
        <div>{currentUser.connectionIds.length} Connections</div>
        <div className="connections-filter">
          <div>Sort by:</div>
          <button>Dropdown</button>
          <div>
            <img src={DROPDOWN_ICON} />
          </div>
        </div>
        <div className="connections-list">
          <ul>
            {currentUser.connectionIds.map((connectionId, idx) => (
              <ConnectionIndexItem key={idx} user={users[connectionId]} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
};