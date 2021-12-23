import React from "react";
import CommentIndexItem from "./comment_index_item";

export default class CommentIndex extends React.Component {
  componentDidMount() {
    let { post, comments, fetchComments } = this.props;
    post.commentIds.every((id) => comments[id]) ? null : fetchComments(post.id);
  }

  render() {
    let { comments, post, user, currentUser, openModal } = this.props;

    return (
      <div className="comment-index">
        {Object.values(comments).map((comment) => {
          return <CommentIndexItem
            comment={comment}
            user={user}
            currentUser={currentUser}
            post={post}
            openModal={openModal}
          />
        })}
      </div>
    );
  }
}
