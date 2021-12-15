import { connect } from "react-redux";
import { fetchConnections } from "../../actions/connection_actions";
import { fetchUser } from "../../actions/user_actions";
import Network from "./network";

const mSTP = (state, ownProps) => {
  return {
    connections: 
      state.entities.connections[state.session.currentUserId],
    pendingConnections:
      state.entities.pendingConnections[state.session.currentUserId],
    url: ownProps.location.pathname,
    currentUserId: state.session.currentUserId,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchConnections: (userId) => dispatch(fetchConnections(userId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(mSTP, mDTP)(Network);