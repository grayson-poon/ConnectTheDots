import { connect } from "react-redux";
import Footer from "./footer";

const mSTP = (state, ownProps) => ({
  url: ownProps.location.pathname,
});


export default connect(mSTP)(Footer);