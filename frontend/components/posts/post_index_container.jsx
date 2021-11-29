import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchPosts } from "../../actions/post_actions";
import PostIndex from "./post_index";

const mSTP = (state, ownProps) => {
  // comments: all comments belonging to this post
  return {
    users: state.entities.users,
    posts: state.entities.posts,
    url: ownProps.location.pathname,
  };
};

const mDTP = (dispatch) => ({
  fetchPosts: (url, userId) => dispatch(fetchPosts(url, userId)),
});

export default withRouter(connect(mSTP, mDTP)(PostIndex));
