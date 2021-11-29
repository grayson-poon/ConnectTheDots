import React from "react";
import ProfileInfo from "./profile_info";
import { BackgroundPicture, ProfilePicture } from "./pictures_on_profile";

const ProfileMain = ({ user, showModal }) => {
  return (
    <div className="profile-main">
      <div className="pictures-on-profile">
        <BackgroundPicture user={user} showModal={showModal} />
        <ProfilePicture user={user} showModal={showModal} />
      </div>
      <ProfileInfo user={user} />
    </div>
  );
};

export default ProfileMain;