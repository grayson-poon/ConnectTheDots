import React from "react";
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE } from "../../util/images_and_icons_util";

const ResultsIndexItem = ({ user, currentUser }) => {
  return (
    <li className="results-index-item">
      <Link to={`/users/${user.id}`}>
        <div>{user.firstName} {user.lastName}</div>
        {user.id === currentUser.id ? (
          <div className="self-identifier">(You)</div>
        ) : null}
        <div>{user.headline}</div>
        <div>
          <img src={user.profilePicture || DEFAULT_PROFILE_PICTURE} />
        </div>
      </Link>
    </li>
  );
}

export default ResultsIndexItem;