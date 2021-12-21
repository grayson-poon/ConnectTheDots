import { connect } from "react-redux";
import { clearSessionErrors, login } from "../../actions/session_actions";
import SessionForm from "./login_form";

const mSTP = ({ errors }) => ({
  user: {
    email: "",
    password: "",
  },
  demoUser: {
    email: "demo@user.com",
    password: "password",
  },
  errors: errors.sessionErrors,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mSTP, mDTP)(SessionForm);