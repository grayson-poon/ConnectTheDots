import React from "react";
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE } from "../../util/images_and_icons_util";

const ResultsIndexItem = ({ user, currentUser, closeSearch }) => {
  return (
    <li className="results-index-item" onClick={closeSearch}>
      <Link to={`/users/${user.id}`}>
        <div className="search-titles">
          <div>{user.firstName} {user.lastName}</div>

          {user.id === currentUser.id ? (
            <div className="self-identifier">(You)</div>
          ) : null}

          {user.headline.length > 36 ? (
            <div>{`${user.headline.slice(0, 37)}...`}</div>
          ) : (
            <div>{user.headline}</div>
          )}
        </div>
        
        <div>
          <img src={user.profilePicture || DEFAULT_PROFILE_PICTURE} />
        </div>
      </Link>
    </li>
  );
}

export default ResultsIndexItem;