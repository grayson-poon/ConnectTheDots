import { connect } from "react-redux";
import { withRouter } from "react-router";
import PostIndex from "./post_index";
import { fetchPosts, createPost } from "../../../actions/post_actions";
import { fetchUser } from "../../../actions/user_actions";

const mSTP = (state, ownProps) => {
  return {
    users: state.entities.users,
    posts: state.entities.posts,
    url: ownProps.location.pathname,
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.currentUserId],
  };
};

const mDTP = (dispatch) => ({
  fetchPosts: (userId) => dispatch(fetchPosts(userId)),
  createPost: (post) => dispatch(createPost(post)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default withRouter(connect(mSTP, mDTP)(PostIndex));
