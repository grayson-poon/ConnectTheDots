import React from "react";
import { MY_NETWORK } from "../../util/url_paths_util";
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
    let { connections, pendingConnections } = this.props;
    // debugger

    return !connections || !pendingConnections
      ? <div>Nothing to show yet</div>
      : this.moreThanZero();
  }

  moreThanZero() {
    let { connections, pendingConnections, fetchUser } = this.props;

    return (
      <div className="network-page">
        <div className="gray-background"></div>
        <div className="pending-connections-index">
          <div>Invitations</div>
          <div className="connections-list">
            <ul>
              {pendingConnections.map((pendingId) => {
                return <PendingIndexItem 
                  pendingId={pendingId} 
                  fetchUser={fetchUser} 
                />
              })}
            </ul>
          </div>
        </div>

        <div className="connections-index">

        </div>
      </div>
    )
  }
};