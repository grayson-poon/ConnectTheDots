import React from "react";
import { CLOSE_BUTTON, POST_PICTURE_ICON } from "../../util/images_and_icons_util";

export default class NewPostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
    }
  }

  render() {
    return this.props.show ? this.show() : null;
  }

  show() {
    let { 
      currentUser,
      handleSubmit,
      post,
      photoUrl,
      showModal,
      updateField,
      handleFile
    } = this.props;

    return (
      <div className="new-post-modal-background">
        <div className="new-post-modal">
          <div className="new-post-header">
            <div>Create a post</div>
            <div className="close-button">
              <button onClick={() => showModal("postForm", false)}>
                <img src={CLOSE_BUTTON} />
              </button>
            </div>
          </div>

          <div className="author-info">
            <div id="image">
              <img
                src={
                  currentUser.profilePicture
                    ? currentUser.profilePicture
                    : DEFAULT_PROFILE_PICTURE
                }
              />
            </div>

            <div id="name">
              {currentUser.firstName} {currentUser.lastName}
            </div>
          </div>

          <div className="new-post-body">
            <input
              type="text"
              onChange={() => updateField("body")}
              value={post.body}
            />
          </div>

          {photoUrl ? (
            <div className="post-picture">
              <img src={photoUrl} />
            </div>
          ) : null}

          <div className="new-post-footer">
            <div id="post-form-picture-input">
              <img src={POST_PICTURE_ICON} />
              <input type="file" onChange={handleFile} accept="image/*" />
            </div>

            <div id="post-button">
              <button onClick={handleSubmit}>Post</button>
            </div>
          </div>

          <div className="post-form-errors"></div>
        </div>
      </div>
    );
  }
}