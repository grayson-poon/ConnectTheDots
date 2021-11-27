import React from "react";
import { Link } from "react-router-dom";
import { MY_NETWORK } from "../../../util/url_paths_util";


const Activity = ({ user, showModal }) => {
  return (
    <div className="profile-activity">
      <div className="title-and-button">
        <h2>Activity</h2>
        <button>Start a post</button>
      </div>

      <Link to={MY_NETWORK}>Number of followers</Link>

      <div className="activity-about">
        <p>Posts you created or commented on are displayed here</p>
      </div>

      <div className="activity-button">
        <button>See all activity</button>
      </div>
    </div>
  );
};

export default Activity;