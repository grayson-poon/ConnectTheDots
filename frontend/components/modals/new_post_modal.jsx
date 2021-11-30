import React from "react";
import { CLOSE_BUTTON, POST_PICTURE_ICON, REMOVE_BUTTON } from "../../util/images_and_icons_util";

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
      handleFile,
      removeFile,
    } = this.props;

    return (
      <div className="new-post-modal-background">
        <div className="new-post-modal">
          <div className="new-post-header">
            <div id="words">Create a post</div>
            <div id="close-button">
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
            <textarea
              name="body"
              rows="10"
              onChange={updateField("body")}
              value={post.body}
              placeholder="What do you want to talk about?"
            />
          </div>

          {photoUrl ? (
            <div className="post-picture">
              <img src={photoUrl} />
            </div>
          ) : null}

          <div className="new-post-footer">
            <div className="post-form-picture-input-2">
              <label>
                <img src={POST_PICTURE_ICON} />
                <input type="file" onChange={handleFile} accept="image/*" />
              </label>
            </div>

            <div id="remove-button">
              <button onClick={removeFile}>
                <img src={REMOVE_BUTTON} />
              </button>
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