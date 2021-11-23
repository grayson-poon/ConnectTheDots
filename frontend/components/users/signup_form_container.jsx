import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import { createUser } from "../../actions/user_actions";
import { withRouter } from "react-router";

// import EmailAndPassword from "./email_and_password";
// import FirstLastNameAndPronouns from "./first_last_name_and_pronouns";;
// import CurrentLocation from "./current_location";
// import Headline from "./headline";
// import About from "./about";
import SignupForm from "./signup_form";

const mSTP = ({ errors }) => ({
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
  errors: errors.userErrors,
});

const mDTP = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
  login: (user) => dispatch(login(user)),
});

export default withRouter(connect(mSTP, mDTP)(SignupForm));