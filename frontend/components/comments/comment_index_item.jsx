import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchComment, updateComment } from "../../actions/comment_actions";
import { fetchComments } from "../../util/comments_api_util";
import { DEFAULT_PROFILE_PICTURE, HORIZONTAL_DOTS } from "../../util/images_and_icons_util";
import CommentModal from "../modals/comment_modal";

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentModal: false,
      comment: props.comment,
      editComment: false,
    };
    this.showModal = this.showModal.bind(this);
    this.editComment = this.editComment.bind(this);
  }

  render() {
    let { comment, user, currentUser, fetchComment } = this.props;

    return (
      <div className="comment-index-item">
        <Link className="comment-header-image" to={`/users/${user.id}`}>
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : DEFAULT_PROFILE_PICTURE
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
              {currentUser.id === user.id && !this.state.editComment ? (
                <div className="comment-header-util">
                  <button onClick={this.showModal}>
                    <img src={HORIZONTAL_DOTS} />
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          <div className="comment-headline">{user.headline}</div>

          <div className="comment-body">
            {this.state.editComment ? (
              <div className="edit-comment-form">
                <textarea
                  id="textarea"
                  type="text"
                  value={this.state.comment.body}
                  onChange={this.updateField("body")}
                />
                <div className="comment-buttons">
                  {this.state.comment.body.length > 0 ? (
                    <button onClick={(event) => {
                      this.editComment(event);
                      this.props.updateComment({ comment: this.state.comment });
                    }}>Save Changes</button>
                  ) : null}
                  <button onClick={(event) => {
                    this.editComment(event);
                    this.setState({ comment });
                  }}>Cancel</button>
                </div>
              </div>
            ) : (
              <div className="plain-comment-body">{comment.body}</div>
            )}
          </div>
        </div>

        {this.state.commentModal ? (
          <CommentModal
            showModal={this.showModal}
            comment={comment}
            editComment={this.editComment}
          />
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

  editComment(event) {
    event.preventDefault();
    this.state.editComment
      ? this.setState({ editComment: false })
      : this.setState({ editComment: true });
  }

  updateField(field) {
    let comment = Object.assign({}, this.state.comment);

    return (event) => {
      event.preventDefault();
      comment[field] = event.target.value;
      this.setState({ comment });
    };
  }
};

const mDTP = (dispatch) => {
  return {
    updateComment: (comment) => dispatch(updateComment(comment)),
    fetchComment: (commentId) => dispatch(fetchComment(commentId)),
  }
};

export default connect(null, mDTP)(CommentIndexItem);