import { connect } from "react-redux";
import { fetchComments } from "../../actions/comment_actions";
import CommentIndex from "./comment_index";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  comments: state.entities.comments,
});

const mDTP = (dispatch) => ({
  fetchComments: (postId) => dispatch(fetchComments(postId)),
});

export default connect(mSTP, mDTP)(CommentIndex);
