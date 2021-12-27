import { connect } from "react-redux";
import { withRouter } from "react-router";
import PostIndex from "./post_index";
import { 
  fetchPosts, 
  createPost, 
  updatePost
} from "../../../actions/post_actions";
import { openModal } from "../../../actions/modal_actions";

const mSTP = (state, ownProps) => {
  return {
    users: state.entities.users,
    posts: state.entities.posts,
    url: ownProps.location.pathname,
  };
};

const mDTP = (dispatch) => ({
  fetchPosts: (url, userId) => dispatch(fetchPosts(url, userId)),
  createPost: (post) => dispatch(createPost(post)),
});

export default withRouter(connect(mSTP, mDTP)(PostIndex));
