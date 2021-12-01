import React from "react";
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE, HORIZONTAL_DOTS } from "../../../util/images_and_icons_util";

const PostIndexItem = ({ post, user }) => {
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
            {user.pronouns ? <div id="pronouns">({user.pronouns})</div> : null}
          </div>
          <div>{user.headline}</div>
          <div>{post.createdAt}</div>
        </div>

        <div className="post-header-util">
          <button>
            <img src={HORIZONTAL_DOTS} />
          </button>
        </div>
      </div>

      <div className="post-body">{post.body}</div>

      {post.postPicture ? (
        <div className="post-picture">
          <img src={post.postPicture} />
        </div>
      ) : null}

      {/* <CommentIndexContainer /> */}
    </li>
  );
};

export default PostIndexItem;