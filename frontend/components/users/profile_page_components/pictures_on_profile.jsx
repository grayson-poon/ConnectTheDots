import React from "react";
import { DEFAULT_BACKGROUND_PICTURE, DEFAULT_PROFILE_PICTURE, NEW_IMAGE_ICON } from "../../../util/images_and_icons_util";

export const ProfilePicture = ({ user, showModal }) => (
  <div className="profile-picture">
    <button onClick={() => showModal("profilePicture", true)}>
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
);

export const BackgroundPicture = ({ user, showModal }) => (
  <div className="background-image">
    {/* <div className="edit-background-image">
      <button>
        <img
          src={NEW_IMAGE_ICON}
        />
      </button>
    </div> */}

    <div className="profile-background-image">
      <img
        src={DEFAULT_BACKGROUND_PICTURE}
      />
    </div>
  </div>
);