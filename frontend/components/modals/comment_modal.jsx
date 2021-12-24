import React from "react";
import { EDIT_ICON, REMOVE_BUTTON } from "../../util/images_and_icons_util";

const CommentModal = ({ showModal }) => {
  return (
    <>
      <div onClick={showModal} className="comment-modal-background"></div>
      <div className="comment-modal">
        <button>
          <img src={EDIT_ICON} />
          <div>Edit</div>
        </button>
        <button>
          <img src={REMOVE_BUTTON} />
          <div>Delete</div>
        </button>
      </div>
    </>
  );
};

export default CommentModal;