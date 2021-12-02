import React from "react";
import PicturesOnProfile from "./pictures_on_profile";

const ProfileMain = ({ user, showModal, currentUser }) => {
  return (
    <div className="profile-main">
      <PicturesOnProfile user={user} showModal={showModal} />

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
            ? <button>Edit profile info</button>
            : <button>Connect</button>
          }
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;