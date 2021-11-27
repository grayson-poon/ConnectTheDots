import React from "react";

export default class EditProfilePictureModal extends React.Component {
  render() {
    return this.props.show ? this.show() : null;
  }

  show() {
    return (
      <div className="profile-picture-modal">
        <p>profile picture modal</p>
      </div>
    )
  }
}