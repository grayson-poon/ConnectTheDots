import { connect } from "react-redux";
import { createUser } from "../../actions/user_actions";

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
});

const mDTP = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
});

export default connect(mSTP, mDTP)(SignupForm);