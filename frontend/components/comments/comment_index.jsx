import React from "react";
import CommentIndexItem from "./comment_index_item";

export default class CommentIndex extends React.Component {
  componentDidMount() {
    let { post, comments, fetchComments } = this.props;
    post.commentIds.every((id) => comments[id]) ? null : fetchComments(post.id);
  }

  render() {
    let { post, comments, users, currentUser, openModal } = this.props;
    if (post.commentIds.some((id) => !comments[id])) return null;

    return (
      <div className="comment-index">
        {post.commentIds.map((id, idx) => {
          return <CommentIndexItem
            key={idx}
            comment={comments[id]}
            user={users[comments[id].userId]}
            currentUser={currentUser}
            openModal={openModal}
          />
        })}
      </div>
    );
  }
}
