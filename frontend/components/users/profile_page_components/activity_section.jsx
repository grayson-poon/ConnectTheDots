import React from "react";
import { Link } from "react-router-dom";
import { MY_NETWORK } from "../../../util/url_paths_util";


const ActivitySection = ({ user, openModal, currentUser }) => {
  return !user || !currentUser ? null : (
    <div className="profile-activity">
      <div className="title-and-button">
        <h2>Activity</h2>
        {currentUser.id === user.id
          ? <button onClick={() => openModal("postModal", { post: null, photoUrl: null, type: "create" })}>Start a post</button>
          : null
        }
      </div>
      
      {currentUser.id === user.id
        ? <Link to={MY_NETWORK}>{`${currentUser.connectionIds.length} followers`}</Link>
        : <Link to={`/users/${user.id}/connections`}>{`${user.connectionIds.length} followers`}</Link>
      }
      

      <div className="activity-about">
        <p>Posts you created or commented on are displayed here</p>
      </div>

      <div className="activity-button">
        <button>See all activity</button>
      </div>
    </div>
  );
};

export default ActivitySection;