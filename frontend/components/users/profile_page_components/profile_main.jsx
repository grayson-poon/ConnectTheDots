import React from "react";
import PicturesOnProfile from "./pictures_on_profile";

const ProfileMain = ({ showUser, showModal }) => {
  return (
    <div className="profile-main">
      <PicturesOnProfile showUser={showUser} showModal={showModal} />

      <div className="profile-info">
        <div className="hide-me">HIDE ME - for vertical space</div>

        <div className="name-pronouns">
          <div className="profile-name">{`${showUser.firstName} ${showUser.lastName}`}</div>
          <div className="profile-pronouns">{showUser.pronouns}</div>
        </div>

        <div className="profile-headline">{`${showUser.headline}`}</div>
        <div className="profile-current-location">{`${showUser.currentLocation}`}</div>
        <div className="edit-profile">
          <button>Edit profile info</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;