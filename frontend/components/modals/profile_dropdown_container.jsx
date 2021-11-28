import { connect } from "react-redux";
import { withRouter } from "react-router";
import { logout } from "../../actions/session_actions";
import ProfileDropdownModal from "./profile_dropdown";

const mSTP = (state, ownProps) => ({
  // currentUser: state.entities.users[state.session.currentUserId],
  // errors: state.errors.userErrors,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mSTP, mDTP)(ProfileDropdownModal));