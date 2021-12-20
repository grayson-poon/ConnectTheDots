import { connect } from "react-redux";
import { fetchConnections } from "../../actions/connection_actions";
import { fetchUser } from "../../actions/user_actions";
import Network from "./network";

const mSTP = (state, ownProps) => {
  return {
    connectionIds: 
      state.entities.connectionIds[state.session.currentUserId],
    pendingIds:
      state.entities.pendingIds[state.session.currentUserId],
    users: state.entities.users,
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