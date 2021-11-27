import React from "react";

export const ProfilePicture = ({ user, showModal }) => (
  <div className="profile-picture">
    <button onClick={() => showModal("profilePicture")}>
      <img
        className="edit-profile-picture"
        src={
          user.profilePicture
            ? user.profilePicture
            : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
        }
        alt="profile picture"
      />
    </button>
  </div>
);

export const BackgroundPicture = ({ user, showModal }) => (
  <div className="background-image">
    <div className="edit-background-image">
      <button>
        <img
          src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/20-512.png"
          alt="default photo"
        />
      </button>
    </div>

    <div className="profile-background-image">
      <img
        src="https://github.com/grayson-poon/ConnectTheDots/blob/main/app/assets/images/profile-background-image.jpg?raw=true"
        alt="default image"
      />
    </div>
  </div>
);