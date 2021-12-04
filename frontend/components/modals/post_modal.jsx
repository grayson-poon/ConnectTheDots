import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { createPost, updatePost } from "../../actions/post_actions";
import { 
  CLOSE_BUTTON, 
  POST_PICTURE_ICON, 
  REMOVE_BUTTON, 
  DEFAULT_PROFILE_PICTURE 
} from "../../util/images_and_icons_util";

class PostModal extends React.Component {
  constructor(props) {
    super(props);

    debugger

    let propsPost = props.post
      ? props.post
      : {
          body: "",
          postPicture: props.photoUrl,
          userId: this.props.currentUser.id,
        };
  

    this.state = {
      post: propsPost,
      photoUrl: props.photoUrl,
    };

    this.handleFile = this.handleFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    let { currentUser, closeModal } = this.props;

    return (
      <div className="new-post-modal-background">
        <div className="new-post-modal">
          <div className="new-post-header">
            <div id="words">Create a post</div>
            <div id="close-button">
              <button onClick={closeModal}>
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
              rows="9"
              onChange={this.updateField("body")}
              value={this.state.post.body}
              placeholder="What do you want to talk about?"
            />
          </div>

          {this.state.photoUrl ? (
            <div className="post-picture">
              <img src={this.state.photoUrl} />
            </div>
          ) : null}

          <div className="new-post-footer">
            <div className="group">
              <div className="post-form-picture-input-2">
                <label>
                  <img src={POST_PICTURE_ICON} />
                  <input type="file" onChange={this.handleFile} accept="image/*" />
                </label>
              </div>

              <div id="remove-button">
                <button onClick={this.removeFile}>
                  <img src={REMOVE_BUTTON} />
                </button>
              </div>
            </div>

            <div id="post-button">
              <button onClick={this.handleSubmit}>Post</button>
            </div>
          </div>

          <div className="post-form-errors"></div>
        </div>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    Object.entries(this.state.post).forEach(([key, value]) => {
      key = key === "postPicture" && value ? "photo" : key;
      formData.append(`post[${key}]`, value);
    });

    this.props
      .createPost(formData)
      .then(() => this.props.closeModal());
  }

  updateField(field) {
    let post = Object.assign({}, this.state.post);

    return (event) => {
      post[field] = event.target.value;
      this.setState({ post });
    };
  }

  handleFile(event) {
    event.preventDefault();
    
    const fileReader = new FileReader();
    let post = Object.assign({}, this.state.post);
    let file = event.currentTarget.files[0];

    fileReader.onloadend = () => {
      post["postPicture"] = file;
      this.setState({ post, photoUrl: fileReader.result });
    };

    if (file) fileReader.readAsDataURL(file);
  }

  removeFile(event) {
    event.preventDefault();

    let post = Object.assign({}, this.state.post);
    post["postPicture"] = null;

    this.setState({ post, photoUrl: null });
  }
}

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createPost: (post) => dispatch(createPost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
  };
};

export default connect(mSTP, mDTP)(PostModal);