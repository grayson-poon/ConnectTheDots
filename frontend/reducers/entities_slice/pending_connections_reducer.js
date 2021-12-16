import { RECEIVE_CONNECTIONS, RECEIVE_WHOLE_CONNECTIONS, REMOVE_CONNECTIONS } from "../../actions/connection_actions";

const pendingConnectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_WHOLE_CONNECTIONS:
      if (action.pendingConnections.length === 0) return [];
      newState[action.pendingConnections[0].connectionId] = [];

      action.pendingConnections.map((pending) => {
        newState[pending.connectionId].push(pending.userId);
      });
      
      return newState;
    case RECEIVE_CONNECTIONS:
      return;
    case REMOVE_CONNECTIONS:
      action.connections.map((connection) => {
        if (newState[connection.connectionId]) {
          let idx = newState[connection.connectionId].indexOf(connection.userId);
          if (idx > -1) newState[connection.connectionId].splice(idx, 1);
        }
      });

      return newState;
    default:
      return state;
  }
};

export default pendingConnectionsReducer;