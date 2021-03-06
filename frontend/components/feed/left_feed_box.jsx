import React from "react";
import { Link } from "react-router-dom";
import { MY_NETWORK } from "../../util/url_paths_util";
import { 
  DEFAULT_BACKGROUND_PICTURE,
  DEFAULT_PROFILE_PICTURE 
} from "../../util/images_and_icons_util";

const LeftFeedBox = ({ currentUser }) => {
  return (
    <div className="left-profile-box">
      <div className="left-profile-background">
        <img src={DEFAULT_BACKGROUND_PICTURE} />
      </div>

      <Link className="left-profile-image" to={`/users/${currentUser.id}`}>
        <img
          src={
            currentUser.profilePicture
              ? currentUser.profilePicture
              : DEFAULT_PROFILE_PICTURE
          }
        />
      </Link>

      <div className="left-profile-info">
        <Link to={`/users/${currentUser.id}`}>
          {currentUser.firstName} {currentUser.lastName}
        </Link>
        <li>{currentUser.headline}</li>
      </div>

      <div className="left-profile-connections">
        <Link to={MY_NETWORK}>
          <div id="text">Number of connections</div>
          <div id="number">{currentUser.connectionIds.length}</div>
        </Link>
      </div>
    </div>
  );
};

export default LeftFeedBox;