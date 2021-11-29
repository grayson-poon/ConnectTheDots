import React from "react";

const PostIndexItem = ({ post, user }) => {

  return (
    <li className="post-index-item">
      <div className="post-header">
        <div className="post-header-image">
          <img src={user.profilePicture} />
        </div>

        <div className="post-header-titles">
          <li>{user.firstName} {user.lastName}</li>
          <li>{user.headline}</li>
        </div>

        <div className="post-body">{post.body}</div>
        
        {post.postPicture ? (
          <div className="post-picture">
            <img src={post.postPicture} />
          </div>
        ) : (
          null
        )}
      </div>

      {/* <CommentIndexContainer /> */}
    </li>
  )
};

export default PostIndexItem;