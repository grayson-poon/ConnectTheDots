import React from "react";
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE, HORIZONTAL_DOTS } from "../../../util/images_and_icons_util";
import EditPostModal from "../../modals/edit_post_modal";

export default class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
      editPostForm: false,
      photoUrl: this.props.post.postPicture,
    }

    this.showModal = this.showModal.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    let { user, post, currentUser } = this.props;

    return (
      <>
        <li className="post-index-item">
          <div className="post-header">
            <Link to={`/users/${user.id}`} className="post-header-image">
              <img
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : DEFAULT_PROFILE_PICTURE
                }
              />
            </Link>

            <div className="post-header-titles">
              <div id="name-pronouns">
                <Link to={`/users/${user.id}`}>
                  {user.firstName} {user.lastName}
                </Link>
                {user.pronouns ? (
                  <div id="pronouns">({user.pronouns})</div>
                ) : null}
              </div>
              <div>{user.headline}</div>
              <div>{post.createdAt}</div>
            </div>

            {currentUser.id === post.userId ? (
              <div className="post-header-util">
                <button onClick={() => this.showModal("editPostForm", true)}>
                  <img src={HORIZONTAL_DOTS} />
                </button>
              </div>
            ) : null}
          </div>

          <div className="post-body">{post.body}</div>

          {post.postPicture ? (
            <div className="post-picture">
              <img src={post.postPicture} />
            </div>
          ) : null}
        </li>
        <EditPostModal
          show={this.state.editPostForm}
          currentUser={currentUser}
          handleSubmit={this.handleSubmit}
          body={this.state.post.body}
          photoUrl={this.state.photoUrl}
          showModal={this.showModal}
          updateField={this.updateField}
          handleFile={this.handleFile}
          removeFile={this.removeFile}
        />
      </>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    Object.entries(this.state.post).forEach(([key, value]) => {
      key = (key === "postPicture" && value ? "photo" : key);
      formData.append(`post[${key}]`, value);
    });

    this.props.updatePost(formData)
      .then(() => this.showModal("editPostForm", false));
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
    if (!this.state.editPostForm) {
      this.showModal("editPostForm", true);
    };

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

  showModal(field, status) {
    (status)
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "scroll";
    
    (!status)
      ? this.setState({ photoUrl: null })
      : null;
      
    this.setState({ [field]: status });
  }
}