import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { CLOSE_BUTTON, DEFAULT_PROFILE_PICTURE } from "../../util/images_and_icons_util";
import { fetchUser, updateUser } from "../../actions/user_actions";
import { closeModal } from "../../actions/modal_actions";
import EditButtons from "./profile_picture_buttons";

class ProfilePictureModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      photoUrl: null,
    }
    this.handleFile = this.handleFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    Object.entries(this.state.user).forEach(([key, value]) => {
      key = (key === "profilePicture" && value ? "photo" : key);
      formData.append(`user[${key}]`, value);
    });

    this.props.updateUser(formData)
      .then(() => this.props.closeModal());
  }

  handleFile(event) {
    event.preventDefault();
    const fileReader = new FileReader();
    
    let user = Object.assign({}, this.state.user);
    let file = event.currentTarget.files[0];

    fileReader.onloadend = () => {
      user["profilePicture"] = file;
      this.setState({ user, photoUrl: fileReader.result });
    };

    if (file) fileReader.readAsDataURL(file);
  }

  removeFile(event) {
    event.preventDefault();

    let user = Object.assign({}, this.state.user);
    user["profilePicture"] = null;

    this.setState({ user, photoUrl: null });
  }

  render() {
    if (!this.props.user) return null;
    let {user, currentUser, closeModal } = this.props;

    return (
      <div className="profile-picture-modal-background">
        <div className="profile-picture-modal">
          <div className="header">
            <div>Profile Photo</div>
            <div className="close-button">
              <button
                onClick={closeModal}
              >
                <img src={CLOSE_BUTTON} />
              </button>
            </div>
          </div>

          <div className="current-image">
            <img
              src={
                this.state.photoUrl
                  ? this.state.photoUrl
                  : this.state.user.profilePicture
                  ? this.state.user.profilePicture
                  : DEFAULT_PROFILE_PICTURE
              }
            />
          </div>

          {currentUser.id === user.id ? (
            <EditButtons
              handleFile={this.handleFile}
              removeFile={this.removeFile}
              handleSubmit={this.handleSubmit}
            />
          ) : null}
        </div>
      </div>
    );
  }
};

const mSTP = (state) => {
  return {
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId],
  };
};

const mDTP = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(ProfilePictureModal);