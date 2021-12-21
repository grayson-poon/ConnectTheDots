import React from "react";
import { DEFAULT_BACKGROUND_PICTURE, DEFAULT_PROFILE_PICTURE } from "../../../util/images_and_icons_util";

const ProfileMain = ({ 
  user, 
  openModal, 
  currentUser, 
  createConnection,
  deleteConnections, 
  fetchUser,
}) => {
  return !user || !currentUser ? null : (
    <div className="profile-main">
      <div className="pictures-on-profile">
        <div className="background-image">
          <div className="profile-background-image">
            <img src={DEFAULT_BACKGROUND_PICTURE} />
          </div>
        </div>

        <div className="profile-picture">
          <button onClick={() => openModal("profilePicture", user)}>
            <img
              className="edit-profile-picture"
              src={
                user.profilePicture
                  ? user.profilePicture
                  : DEFAULT_PROFILE_PICTURE
              }
              alt="profile picture"
            />
          </button>
        </div>
      </div>

      <div className="profile-info">
        <div className="hide-me">HIDE ME - for vertical space</div>
        <div className="name-pronouns">
          <div className="profile-name">{`${user.firstName} ${user.lastName}`}</div>
          <div className="profile-pronouns">{user.pronouns}</div>
        </div>

        <div className="profile-headline">{`${user.headline}`}</div>
        <div className="profile-current-location">{`${user.currentLocation}`}</div>
        <div className="blue-profile-button">
          {currentUser.id === user.id
            ? <button className="standard-button" onClick={() => openModal("editUser", user)}>Edit intro</button>
            : currentUser.connectionIds.includes(user.id) 
              ? <button className="red-button" onClick={() => deleteConnections(user.id).then(() => fetchUser(user.id))}>Remove connection</button>
              : currentUser.pendingIds.includes(user.id) 
                ? <button className="white-button" onClick={() => createConnection(user.id).then(() => fetchUser(user.id))}>Accept invite</button>
                : user.pendingIds.includes(currentUser.id)
                  ? <button className="white-button" onClick={() => deleteConnections(user.id).then(() => fetchUser(user.id))}>Request pending</button>
                  : <button className="standard-button" onClick={() => createConnection(user.id).then(() => fetchUser(user.id))}>Connect</button>
          }
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;