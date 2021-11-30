import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  CAMERA_ICON,
  CLOSE_BUTTON, 
  DEFAULT_PROFILE_PICTURE,
  DELETE_BUTTON,
  CHECK_MARK_ICON
} from "../../util/images_and_icons_util";

class ProfilePictureModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUser: this.props.showUser,
      photoUrl: null,
    }
    this.handleFile = this.handleFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return this.props.show ? this.show() : null;
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    Object.entries(this.state.showUser).forEach(([key, value]) => {
      key = (key === "profilePicture" && value ? "photo" : key);
      formData.append(`user[${key}]`, value);
    });

    this.props.updateUser(formData)
      .then(() => this.props.showModal("profilePicture", false));
  }

  handleFile(event) {
    event.preventDefault();
    const fileReader = new FileReader();
    
    let showUser = Object.assign({}, this.state.showUser);
    let file = event.currentTarget.files[0];

    fileReader.onloadend = () => {
      showUser["profilePicture"] = file;
      this.setState({ showUser, photoUrl: fileReader.result });
    };

    if (file) fileReader.readAsDataURL(file);
  }

  removeFile(event) {
    event.preventDefault();

    let showUser = Object.assign({}, this.state.showUser);
    showUser["profilePicture"] = null;

    this.setState({ showUser, photoUrl: null });
  }

  show() {
    return (
      <div className="profile-picture-modal-background">
        <div className="profile-picture-modal">
          <div className="header">
            <div>Profile Photo</div>
            <div className="close-button">
              <button onClick={() => this.props.showModal("profilePicture", false)}>
                <img src={CLOSE_BUTTON} />
              </button>
            </div>
          </div>

          <div className="current-image">
            <img
              src={
                this.state.photoUrl
                  ? this.state.photoUrl
                  : this.state.showUser.profilePicture
                    ? this.state.showUser.profilePicture
                    : DEFAULT_PROFILE_PICTURE
              }
            />
          </div>

          <div className="edit-delete">
            <div id="upload-button">
              <label>
                <img src={CAMERA_ICON} />
                <input
                  type="file"
                  onChange={this.handleFile}
                  accept="image/*"
                />
                Upload photo
              </label>
            </div>

            <div id="delete">
              <button onClick={this.removeFile}>
                <img src={DELETE_BUTTON} />
                <div>Remove photo</div>
              </button>
            </div>

            <div id="submit-button">
              <button onClick={this.handleSubmit}>
                <img src={CHECK_MARK_ICON} />
                <div>Update photo</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(connect(null)(ProfilePictureModal)); 