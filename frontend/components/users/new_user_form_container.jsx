import { connect } from "react-redux";
import { createUser } from "../../actions/user_actions";
import NewUserForm from "./new_user_form";

const mSTP = (state) => ({
  user: {
    email: "",
    password: "",
  },
  formType: "Create User"
});

const mDTP = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user))
});

export default connect(mSTP, mDTP)(NewUserForm);