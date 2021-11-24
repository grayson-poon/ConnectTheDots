import { connect } from "react-redux";
import { createUser } from "../../actions/user_actions";
import { FEED } from "../../util/url_paths_util";

import SignupForm from "./signup_form";

const mSTP = (state) => ({
  user: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    pronouns: "",
    currentLocation: "",
    headline: "",
    about: "",
    profilePicture: "",
  },
  formType: "Create User",
  errors: state.errors.userErrors,
  feedUrl: FEED,
});

const mDTP = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
});

export default connect(mSTP, mDTP)(SignupForm);