import React from "react";
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE, HORIZONTAL_DOTS } from "../../util/images_and_icons_util";

const CommentIndexItem = ({ comment, user, currentUser, openModal }) => {
  return (
    <div className="comment-index-item">
      <Link className="comment-header-image">
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
                <button>
                  <img src={HORIZONTAL_DOTS} />
                </button>
              </div>
            ) : null}
          </div>
        </div>

        <div className="comment-body">{comment.body}</div>
      </div>
    </div>
  );
};

export default CommentIndexItem;