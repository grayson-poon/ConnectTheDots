import { connect } from "react-redux";
import selectAllPosts from "../../reducers/selectors";
import fetchFeedPosts, { fetchActivityPosts } from "../../actions/post_actions";
import Post from "./post_index";

const mSTP = (state, ownProps) => {
  // comments: all comments belonging to this post
  return {
    posts: selectAllPosts(state),
  };
};

const mDTP = (dispatch) => ({
  fetchFeedPosts: () => dispatch(fetchFeedPosts()),
  fetchActivityPosts: () => dispatch(fetchActivityPosts()),
});

export default connect(mSTP, mDTP)(Post);
