import { connect } from "react-redux";
import EditProfilePictureModal from "./edit_profile_picture";
import { updateUser } from "../../actions/user_actions";
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    errors: state.errors.userErrors,
  }
}

const mDTP = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user)),
});

export default withRouter(connect(mSTP, mDTP)(EditProfilePictureModal));