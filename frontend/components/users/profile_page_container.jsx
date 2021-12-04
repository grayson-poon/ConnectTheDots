import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchUser, updateUser } from "../../actions/user_actions";
import UserShow from "./profile_page";

const mSTP = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId],
  }
};

const mDTP = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user)),
    openModal: (modalType, entity) => dispatch(openModal(modalType, entity)),
  };
};

export default connect(mSTP, mDTP)(UserShow);