import { RECEIVE_CONNECTIONS, RECEIVE_WHOLE_CONNECTIONS, REMOVE_CONNECTIONS } from "../../actions/connection_actions";

const pendingConnectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_WHOLE_CONNECTIONS:
      newState[action.pendingConnections[0].connectionId] = [];

      action.pendingConnections.map((pending) => {
        newState[pending.connectionId].push(pending.userId);
      });

      return newState;
    case RECEIVE_CONNECTIONS:
      return;
    case REMOVE_CONNECTIONS:
      return;
    default:
      return state;
  }
};

export default pendingConnectionsReducer;