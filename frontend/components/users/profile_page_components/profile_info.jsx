import React from "react";

const ProfileInfo = ({ user }) => (
  <div className="profile-info">
    <div className="hide-me">HIDE ME - for vertical space</div>

    <div className="name-pronouns">
      <div className="profile-name">{`${user.firstName} ${user.lastName}`}</div>
      <div className="profile-pronouns">{user.pronouns}</div>
    </div>

    <div className="profile-headline">{`${user.headline}`}</div>
    <div className="profile-current-location">{`${user.currentLocation}`}</div>
    <div className="edit-profile">
      <button>Edit profile info</button>
    </div>
  </div>
);

export default ProfileInfo;