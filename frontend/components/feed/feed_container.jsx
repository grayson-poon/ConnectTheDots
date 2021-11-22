import { connect } from "react-redux";
import Feed from "./feed";

const mSTP = (state, ownProps) => ({
  // posts: all posts of the users connections
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(Feed);