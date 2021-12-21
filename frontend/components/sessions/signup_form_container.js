import { connect } from "react-redux";
import { clearUserErrors, createUser } from "../../actions/user_actions";
import { login } from "../../actions/session_actions";

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
    profilePicture: null,
  },
  demoUser: {
    email: "demo@user.com",
    password: "password",
  },
  formType: "Create User",
  errors: state.errors.userErrors,
});

const mDTP = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
  login: (user) => dispatch(login(user)),
  clearUserErrors: () => dispatch(clearUserErrors()),
});

export default connect(mSTP, mDTP)(SignupForm);