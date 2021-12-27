import React from "react";
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE, HORIZONTAL_DOTS } from "../../../util/images_and_icons_util";
import CommentIndexContainer from "../../comments/comment_index_container";

export default class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
      comment: {
        body: "",
        userId: props.currentUser.id,
        postId: props.post.id,
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let { user, post, currentUser, openModal } = this.props;

    return (
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
              <button
                onClick={() =>
                  openModal("postModal", {
                    post,
                    photoUrl: post.postPicture,
                    type: "edit",
                  })
                }
              >
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

        <div className="comments-section">
          <ul className="comments-header">
            <button className="comments-count" onClick={this.handleClick}>
              {`${post.commentIds.length} comments`}
            </button>
          </ul>

          <div className="new-comment-form">
            <div className="comment-form-input">
              <Link
                className="comment-form-header"
                to={`/users/${currentUser.id}`}
              >
                <img
                  src={
                    currentUser.profilePicture
                      ? currentUser.profilePicture
                      : DEFAULT_PROFILE_PICTURE
                  }
                />
              </Link>
              <input
                type="text"
                placeholder="Tell them what you loved..."
                value={this.state.comment.body}
                onChange={this.updateField("body")}
              />
            </div>

            {this.state.comment.body.length > 0 ? (
              <div className="comment-submit">
                <button>Post</button>
              </div>
            ) : null}
          </div>

          {this.state.showComments ? (
            <CommentIndexContainer post={post} currentUser={currentUser} />
          ) : null}
        </div>
      </li>
    );
  };

  handleClick(event) {
    event.preventDefault();
    this.state.showComments
      ? this.setState({ showComments: false })
      : this.setState({ showComments: true });
  }

  updateField(field) {
    let comment = Object.assign({}, this.state.comment);

    return (event) => {
      event.preventDefault();
      comment[field] = event.target.value;
      this.setState({ comment });
    }
  }
}