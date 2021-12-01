import { connect } from "react-redux";
import { withRouter } from "react-router";
import PostIndex from "./post_index";
import { 
  fetchPosts, 
  createPost, 
  updatePost
} from "../../../actions/post_actions";

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
  createPost: (post) => dispatch(createPost(post)),
  updatePost: (post) => dispatch(updatePost(post)),
});

export default withRouter(connect(mSTP, mDTP)(PostIndex));
