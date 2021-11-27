import React from "react";
import { CLOSE_BUTTON, DEFAULT_PROFILE_PICTURE, DELETE_BUTTON } from "../../util/images_and_icons_util";

export default class EditProfilePictureModal extends React.Component {
  render() {
    return this.props.show ? this.show() : null;
  }

  show() {
    let { user } = this.props;

    return (
      <div className="profile-picture-modal">
        <div className="header">
          <div>Profile Photo</div>
          <div className="close-button">
            <img src={CLOSE_BUTTON} />
          </div>
        </div>

        <div className="current-image">
          <img src={user.profilePicture
            ? user.profilePicture
            : DEFAULT_PROFILE_PICTURE
          } />
        </div>

        <div className="edit-delete">
          <div id="edit">
            <input type="file" accept="image/*"/>
          </div>

          <div id="delete">
            <img src={DELETE_BUTTON} />
            <div>Delete</div>
          </div>
        </div>
      </div>
    )
  }
}