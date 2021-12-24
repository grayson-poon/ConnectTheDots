import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE, HORIZONTAL_DOTS } from "../../util/images_and_icons_util";
import CommentModal from "../modals/comment_modal";

export default class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentModal: false,
    }
    this.showModal = this.showModal.bind(this);
  }

  render() {
    let { comment, user, currentUser, openModal } = this.props;

    return (
      <div className="comment-index-item">
        <Link className="comment-header-image" to={`/users/${user.id}`}>
          <img
            src={
              user.profilePicture ? user.profilePicture : DEFAULT_PROFILE_PICTURE
            }
          />
        </Link>

        <div className="comment">
          <div className="comment-header-titles">
            <div>
              <div>{`${user.firstName} ${user.lastName}`}</div>
              <div>{`(${user.pronouns})`}</div>
            </div>

            <div>
              <div>{comment.createdAt}</div>
              {currentUser.id === user.id ? (
                <div className="comment-header-util">
                  <button onClick={this.showModal}>
                    <img src={HORIZONTAL_DOTS} />
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          <div className="comment-headline">{user.headline}</div>

          <div className="comment-body">{comment.body}</div>
        </div>

        {this.state.commentModal ? (
          <CommentModal showModal={this.showModal} comment={comment} />
        ) : null}
      </div>
    );
  }

  showModal(event) {
    event.preventDefault();
    this.state.commentModal
      ? this.setState({ commentModal: false })
      : this.setState({ commentModal: true });
  }
};