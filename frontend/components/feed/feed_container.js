import { connect } from "react-redux";
import Feed from "./feed";
import { fetchUser } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId],
    url: ownProps.location.pathname,
  };
}

const mDTP = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mSTP, mDTP)(Feed);