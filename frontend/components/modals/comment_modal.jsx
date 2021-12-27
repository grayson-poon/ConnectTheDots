import React from "react";
import { connect } from "react-redux";
import { deleteComment, updateComment } from "../../actions/comment_actions";
import { EDIT_ICON, REMOVE_BUTTON } from "../../util/images_and_icons_util";

const CommentModal = ({ comment, showModal, deleteComment, editComment }) => {
  return (
    <>
      <div onClick={showModal} className="comment-modal-background"></div>
      <div className="comment-modal">
        <button onClick={(event) => {
          showModal(event);
          editComment(event);
        }}>
          <img src={EDIT_ICON} />
          <div>Edit</div>
        </button>
        <button onClick={(event) => {
          showModal(event);
          deleteComment(comment.id);
        }}>
          <img src={REMOVE_BUTTON} />
          <div>Delete</div>
        </button>
      </div>
    </>
  );
};

const mDTP = (dispatch) => {
  return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  }
}

export default connect(null, mDTP)(CommentModal);