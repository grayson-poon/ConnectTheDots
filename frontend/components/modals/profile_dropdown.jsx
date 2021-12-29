import React from "react";
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE } from "../../util/images_and_icons_util";

const ProfileDropdown = ({ currentUser, logout, showModal }) => {
  return (
    <div>
      <div
        className="profile-dropdown-modal-background"
        onClick={showModal}
      ></div>
      <div className="profile-dropdown">
        <div className="information">
          <div id="image">
            <img
              src={
                currentUser.profilePicture
                  ? currentUser.profilePicture
                  : DEFAULT_PROFILE_PICTURE
              }
            />
          </div>

          <div id="titles">
            <ul>
              <li>
                {currentUser.firstName} {currentUser.lastName}
              </li>
              <li>{currentUser.headline}</li>
            </ul>
          </div>
        </div>

        <div className="view-profile">
          <Link to={`/users/${currentUser.id}`} onClick={showModal}>View Profile</Link>
        </div>

        <div className="logout-user">
          <button onClick={() => {
            showModal();
            logout();
          }}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;