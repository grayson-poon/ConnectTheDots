import React from "react";
import { openModal } from "../../../actions/modal_actions";
import { DEFAULT_PROFILE_PICTURE, POST_PICTURE_ICON } from "../../../util/images_and_icons_util";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NewPostForm extends React.Component {
  render() {
    let { currentUser, openModal } = this.props;

    return (
      <div className="new-post-form">
        <div className="post-form-header">
          <Link id="image" to={`/users/${currentUser.id}`}>
            <img
              src={
                currentUser.profilePicture
                  ? currentUser.profilePicture
                  : DEFAULT_PROFILE_PICTURE
              }
            />
          </Link>

          <div id="post-form-button">
            <button onClick={() => openModal("postModal", { post: null, photoUrl: null, type: "create" })}>
              Start a post
            </button>
          </div>
        </div>

        <div className="post-form-picture-input">
          <label>
            <img src={POST_PICTURE_ICON} />
            <input
              type="file" 
              onChange={this.handleFile.bind(this)} 
              accept="image/*" 
            />
            Photo
          </label>
        </div>
      </div>
    );
  }

  handleFile(event) {
    event.preventDefault();
    const fileReader = new FileReader();
    let file = event.currentTarget.files[0];
    let photoUrl;

    let post = {
      body: "",
      postPicture: file,
      userId: this.props.currentUser.id,
    };

    fileReader.onloadend = () => {
      photoUrl = fileReader.result;
      this.props.openModal("postModal", { post, photoUrl, type: "create" });
    };

    if (file) fileReader.readAsDataURL(file);
  };
}

const mDTP = (dispatch) => {
  return {
    openModal: (modalType, entity) => dispatch(openModal(modalType, entity)),
  };
}

export default connect(null, mDTP)(NewPostForm);