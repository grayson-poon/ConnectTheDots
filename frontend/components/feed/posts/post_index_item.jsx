import React from "react";
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE, HORIZONTAL_DOTS } from "../../../util/images_and_icons_util";

const PostIndexItem = ({ user, post, currentUser, openModal }) => {
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
            <button onClick={() => openModal("postModal", { post, photoUrl: post.postPicture, type: "edit" })}>
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
    </li>
  );
}

export default PostIndexItem;