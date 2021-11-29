import { connect } from "react-redux";
import { withRouter } from "react-router";
import selectAllPosts from "../../reducers/selectors";
import fetchPosts from "../../actions/post_actions";
import Post from "./post_index";

const mSTP = (state, ownProps) => {
  // comments: all comments belonging to this post
  return {
    posts: selectAllPosts(state),
    url: ownProps.location.pathname,
  };
};

const mDTP = (dispatch) => ({
  fetchPosts: (page, userId) => dispatch(fetchPosts(page, userId)),
});

export default withRouter(connect(mSTP, mDTP)(Post));
