import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = ({ errors }) => ({
  user: {
    email: "",
    password: "",
  },
  formType: "login",
  feedUrl: "/feed",
  errors: errors.sessionErrors,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(SessionForm);