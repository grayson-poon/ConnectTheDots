import { connect } from "react-redux";
import Post from "./post";

const mSTP = (state, ownProps) => ({
  // comments: all comments belonging to this post
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(Post);
