import React from "react";
import {
  CAMERA_ICON,
  CLOSE_BUTTON, 
  DEFAULT_PROFILE_PICTURE,
  DELETE_BUTTON,
  CHECK_MARK_ICON
} from "../../util/images_and_icons_util";

export default class EditProfilePictureModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      photoUrl: null,
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return this.props.show ? this.show() : null;
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    debugger

    Object.entries(this.state.user).forEach(([key, value]) => {
      key = (key === "profilePicture" ? "photo" : key);
      formData.append(`user[${key}]`, value);
    });

    // debugger
    this.props.updateUser(formData);
  }

  handleFile(event) {
    const fileReader = new FileReader();
    let user = Object.assign({}, this.state.user);
    let file = event.currentTarget.files[0];

    fileReader.onloadend = () => {
      user["profilePicture"] = file ? file : "";
      this.setState({ user, photoUrl: fileReader.result });
    }

    if (file) fileReader.readAsDataURL(file);
  }

  show() {
    let { user, hideModal } = this.props;

    return (
      <div className="profile-picture-modal">
        <div className="header">
          <div>Profile Photo</div>
          <div className="close-button">
            <button onClick={() => hideModal("profilePicture")}>
              <img src={CLOSE_BUTTON} />
            </button>
          </div>
        </div>

        <div className="current-image">
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : (this.state.photoUrl
                  ?  this.state.photoUrl
                  : DEFAULT_PROFILE_PICTURE)
            }
          />
        </div>

        <div className="edit-delete">
          <div id="upload-button">
            <label>
              <img src={CAMERA_ICON} />
              <input type="file" onChange={this.handleFile} accept="image/*" />
              Upload photo
            </label>
          </div>

          <div id="submit-button">
            <button onClick={this.handleSubmit}>
              <img src={CHECK_MARK_ICON} />
              <div>Update photo</div>
            </button>
          </div>

          <div id="delete">
            <button>
              <img src={DELETE_BUTTON} />
              <div>Remove photo</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}