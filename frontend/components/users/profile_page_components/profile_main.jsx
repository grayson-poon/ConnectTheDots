import React from "react";
import PicturesOnProfile from "./pictures_on_profile";
import {
  DEFAULT_BACKGROUND_PICTURE,
  DEFAULT_PROFILE_PICTURE,
  NEW_IMAGE_ICON,
} from "../../../util/images_and_icons_util";


const ProfileMain = ({ 
  user, 
  openModal, 
  currentUser, 
  createConnection,
  deleteConnections, 
  fetchUser,
}) => {
  debugger
  return (
    <div className="profile-main">
      <div className="pictures-on-profile">
        <div className="background-image">
          {/* <div className="edit-background-image">
                <button>
                  <img
                    src={NEW_IMAGE_ICON}
                  />
                </button>
              </div> */}

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
            ? <button onClick={() => openModal("editUser", user)}>Edit intro</button>
            : currentUser.connectionIds.includes(user.id) 
              ? <button onClick={() => deleteConnections(user.id).then(() => fetchUser(user.id))}>Remove connection</button>
              : currentUser.pendingIds.includes(user.id) 
                ? <button onClick={() => createConnection(user.id).then(() => fetchUser(user.id))}>Accept invite</button>
                : user.pendingIds.includes(currentUser.id)
                  ? <button onClick={() => deleteConnections(user.id).then(() => fetchUser(user.id))}>Request pending</button>
                  : <button onClick={() => createConnection(user.id).then(() => fetchUser(user.id))}>Connect</button>
          }
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;