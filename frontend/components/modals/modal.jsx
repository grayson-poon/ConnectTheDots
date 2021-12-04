import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import ProfilePictureModal from "./profile_picture_modal";

const Modal = ({ modal }) => {
  debugger

  if (!modal) {
    document.body.style.overflow = "scroll";
    return null;
  }

  document.body.style.overflow = "hidden";

  switch(modal.modalType) {
    case "profilePicture":
      return <ProfilePictureModal user={modal.entity} />;
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