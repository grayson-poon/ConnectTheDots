import React from "react";
import { DEFAULT_PROFILE_PICTURE } from "../../util/images_and_icons_util";
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
    }
    this.showModal = this.showModal.bind(this);
  }

  render() {
    let { currentUser } = this.props;

    return (
      <div className="new-post-form">
        <div className="post-form-header">
          <div id="image">
            <img src={
              currentUser.profilePicture
                ? currentUser.profilePicture
                : DEFAULT_PROFILE_PICTURE
            } />
          </div>

          <div id="post-form-input">
            <button onClick={this.showModal("postForm", true)}>Start a post</button>
          </div>

          <NewPostModal />

          <div className="post-form-errors"></div>
        </div>
      </div>
    )
  }

  showModal(event) {
    event.preventDefault();

    return (field, status) => (
      this.setState({ [field]: status })
    );
  }
}