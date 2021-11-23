import { connect } from "react-redux";
import { createUser } from "../../actions/user_actions";
import NewUserForm from "./new_user_form_1";

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
  // formStatus: {
  //   emailAndPassword: false,
  //   firstLastNameAndPronouns: false,
  //   currentLocation: false,
  //   headline: false,
  //   about: false,
  // },
});

const mDTP = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user))
});

export default connect(mSTP, mDTP)(NewUserForm);