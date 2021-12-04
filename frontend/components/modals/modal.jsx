import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import ProfileDropdown from "./profile_dropdown";
import ProfilePictureModal from "./profile_picture_modal";
import PostModal from "./new_post_modal";

const Modal = ({ modal }) => {
  debugger

  if (!modal) {
    document.body.style.overflow = "scroll";
    return null;
  }

  switch(modal.modalType) {
    case "profilePicture":
      document.body.style.overflow = "hidden";
      return <ProfilePictureModal user={modal.entity} />;
    case "profileDropdown":
      return <ProfileDropdown currentUser={modal.entity} />;
    case "postModal":
      document.body.style.overflow = "hidden";
      return <PostModal 
        post={modal.entity.post} 
        photoUrl={modal.entity.photoUrl} 
      />;
    default:
      document.body.style.overflow = "scroll";
      return null;
  }
};

const mSTP = (state) => {
  return {
    modal: state.ui.modal,
    posts: state.entities.posts,
  }
};

const mDTP = (dispatch) => {
  return {
    closeModal: dispatch(closeModal()),
  }
};

export default connect(mSTP, mDTP)(Modal);