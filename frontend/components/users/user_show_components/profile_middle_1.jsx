import React from "react";
import ProfileInfo from "./profile_info";
import { BackgroundPicture, ProfilePicture } from "./pictures_on_profile";

const ProfileMiddle1 = ({ user, showModal }) => {
  return (
    <div className="profile-middle-1">
      <BackgroundPicture user={user} showModal={showModal} />
      <ProfilePicture user={user} showModal={showModal} />
      <ProfileInfo user={user} />
    </div>
  );
};

export default ProfileMiddle1;