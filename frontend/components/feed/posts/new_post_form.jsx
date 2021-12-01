import React from "react";
import NewPostModal from "../../modals/new_post_modal";
import { 
  DEFAULT_PROFILE_PICTURE, 
  POST_PICTURE_ICON 
} from "../../../util/images_and_icons_util";
import { Link } from "react-router-dom";

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
    this.removeFile = this.removeFile.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    let { currentUser } = this.props;

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
            <button onClick={() => this.showModal("postForm", true)}>
              Start a post
            </button>
          </div>
        </div>

        <div className="post-form-picture-input">
          <label>
            <img src={POST_PICTURE_ICON} />
            <input
              type="file" 
              onChange={this.handleFile} 
              accept="image/*" 
            />
            Photo
          </label>
        </div>

        <NewPostModal
          show={this.state.postForm}
          currentUser={currentUser}
          handleSubmit={this.handleSubmit}
          body={this.state.post.body}
          photoUrl={this.state.photoUrl}
          showModal={this.showModal}
          updateField={this.updateField}
          handleFile={this.handleFile}
          removeFile={this.removeFile}
        />
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    Object.entries(this.state.post).forEach(([key, value]) => {
      key = (key === "postPicture" && value ? "photo" : key);
      formData.append(`post[${key}]`, value);
    });

    this.props.createPost(formData)
      .then(() => this.showModal("postForm", false));
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
    if (!this.state.postForm) {
      this.showModal("postForm", true);
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