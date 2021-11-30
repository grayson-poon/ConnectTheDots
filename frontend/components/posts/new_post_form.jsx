import React from "react";
import { DEFAULT_PROFILE_PICTURE, POST_PICTURE_ICON } from "../../util/images_and_icons_util";
import NewPostModal from "../modals/new_post_modal";

export default class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        body: "",
        postPicture: null,
        userId: this.props.currentUser.id,
      },
      
      postForm: false,
      photoUrl: null,
    };

    this.showModal = this.showModal.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    let { currentUser } = this.props;

    return (
      <div className="new-post-form">
        <div className="post-form-header">
          <div id="image">
            <img
              src={
                currentUser.profilePicture
                  ? currentUser.profilePicture
                  : DEFAULT_PROFILE_PICTURE
              }
            />
          </div>

          <div id="post-form-button">
            <button onClick={() => this.showModal("postForm", true)}>
              Start a post
            </button>
          </div>

          <div id="post-form-picture-input">
            <img src={POST_PICTURE_ICON} />
            <input type="file" onChange={this.handleFile} accept="image/*" />
          </div>

          <NewPostModal
            show={this.state.postForm}
            currentUser={currentUser}
            handleSubmit={this.handleSubmit}
            post={this.state.post}
            photoUrl={this.state.photoUrl}
            showModal={this.showModal}
            updateField={this.updateField}
            handleFile={this.handleFile}
          />
        </div>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    Object.entries(this.state.post).forEach(([key, value]) => {
      renamedKey = (key === "postPicture" && value ? "photo" : key);
      formData.append(`post[${renamedKey}]`, value);
    });

    this.props.createPost(formData)
      .then(() => this.props.showModal("postForm", false));
  }

  updateField(field) {
    let user = Object.assign({}, this.state.user);
    return (event) => {
      user[field] = event.target.value;
      this.setState({ user });
    };
  }

  handleFile(event) {
    event.preventDefault();
    if (!this.state.postForm) {
      this.setState({ postForm: true });
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

  showModal(field, status) {
    this.setState({ [field]: status });
  }
}