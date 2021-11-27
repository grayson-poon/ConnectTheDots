import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUser } from "../../actions/user_actions";
import Navbar from "./navbar";

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.currentUserId,
  url: ownProps.location.pathname,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(Navbar);