import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import ProfileDropdown from "./profile_dropdown";
import ProfilePictureModal from "./profile_picture_modal";
import PostModal from "./post_modal";
import EditUser from "./edit_user";

const Modal = ({ modal }) => {
  if (!modal) {
    document.body.style.overflow = "scroll-y";
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
        type={modal.entity.type}
      />;
    case "editUser":
      document.body.style.overflow = "hidden";
      return <EditUser user={modal.entity} />;
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