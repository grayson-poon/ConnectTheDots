import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
import { fetchUser } from "../../actions/user_actions";
import Navbar from "./navbar";

const mSTP = (state, ownProps) => { 
  return ({
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId],
    url: ownProps.location.pathname,
  });
}

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  openModal: (modalType, entity) => dispatch(openModal(modalType, entity)),
});

export default connect(mSTP, mDTP)(Navbar);