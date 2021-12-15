import React from "react";
import { MY_NETWORK } from "../../util/url_paths_util";

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
    return (
      <div className="network-page">
        <div className="pending-connections-index">

        </div>

        <div className="connections-index">

        </div>
      </div>
    )
  }
};