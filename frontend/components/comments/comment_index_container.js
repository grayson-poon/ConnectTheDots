import { connect } from "react-redux";
import { fetchComments } from "../../actions/comment_actions";
import { openModal } from "../../actions/modal_actions";
import CommentIndex from "./comment_index";

const mSTP = (state, ownProps) => ({
  comments: state.entities.comments,
});

const mDTP = (dispatch) => ({
  fetchComments: (postId) => dispatch(fetchComments(postId)),
  openModal: (modalType, entity) => dispatch(openModal(modalType, entity)),
});

export default connect(mSTP, mDTP)(CommentIndex);
