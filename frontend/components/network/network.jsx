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

  // componentDidUpdate(prevProps) {
  //   if (
  //     this.props.connections !== prevProps.connections ||
  //     this.props.pendingConnections !== prevProps.pendingConnections
  //   ) {
  //     debugger
  //     this.props.fetchConnections(this.props.currentUserId);
  //   }
  // }

  render() {
    let { connections, pendingConnections } = this.props;

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
          <div className="pending-list">
            <ul>
              {pendingConnections.map((pendingId, idx) => {
                return (
                  <PendingIndexItem
                    key={idx}
                    pendingId={pendingId}
                    fetchUser={fetchUser}
                  />
                );
              })}
            </ul>
          </div>
        </div>

        <div className="connections-index">
          <div>{`${connections.length} Connections`}</div>
          <div className="connections-filter">
            <div>Sort by:</div>
            <button>Dropdown</button>
            <div>
              <img src={DROPDOWN_ICON} />
            </div>
          </div>
          <div className="connections-list">
            <ul>
              {connections.map((connectionId, idx) => {
                return (
                  <ConnectionIndexItem
                    key={idx}
                    fetchUser={fetchUser}
                    connectionId={connectionId}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
};