import { RECEIVE_CONNECTION, RECEIVE_WHOLE_CONNECTIONS, REMOVE_CONNECTIONS } from "../../actions/connection_actions";

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
    case RECEIVE_CONNECTION:
      if (!newState[action.currentUserId]) return newState;
      
      if (action.requestAccepted) {
        let idx = newState[action.currentUserId].indexOf(
          parseInt(action.notCurrentUserId)
        );
        if (idx > -1) newState[action.currentUserId].splice(idx, 1);
      }

      newState[action.currentUserId].length === 0
        ? delete newState[action.currentUserId]
        : null;
      
      return newState;
    case REMOVE_CONNECTIONS:
      if (newState[action.currentUserId]) {
        let idx = newState[action.currentUserId].indexOf(
          parseInt(action.notCurrentUserId)
        );
        if (idx > -1) newState[action.currentUserId].splice(idx, 1);
      };

      newState[action.currentUserId].length === 0
        ? delete newState[action.currentUserId]
        : null;
      
      return newState;
    default:
      return state;
  }
};

export default pendingConnectionsReducer;