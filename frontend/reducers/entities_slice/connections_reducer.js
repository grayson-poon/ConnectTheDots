import { RECEIVE_CONNECTION, RECEIVE_WHOLE_CONNECTIONS, REMOVE_CONNECTIONS } from "../../actions/connection_actions";
import { RECEIVE_WHOLE_POSTS } from "../../actions/post_actions";

const connectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_WHOLE_CONNECTIONS:
      if (action.connectedUsers.length === 0) return [];
      newState[action.userId] = [];

      Object.values(action.connectedUsers).map((user) => {
        newState[action.userId].push(user.id);
      });
      
      return newState;
    case RECEIVE_WHOLE_POSTS:
      if (action.connectedUsers.length === 0) return [];
      newState[action.currentUserId] = [];

      Object.values(action.connectedUsers).map((user) => {
        newState[action.currentUserId].push(user.id);
      });

      return newState;
    case RECEIVE_CONNECTION:
      if (action.requestAccepted) {
        !newState[action.currentUserId]
          ? newState[action.currentUserId] = []
          : null;

        newState[action.currentUserId].push(action.notCurrentUserId);
      }

      return newState;
    case REMOVE_CONNECTIONS:
      if (newState[action.currentUserId]) {
        let idx = newState[action.currentUserId].indexOf(
          parseInt(action.notCurrentUserId)
        );
        if (idx > -1) newState[action.currentUserId].splice(idx, 1);
      }

      newState[action.currentUserId].length === 0
        ? delete newState[action.currentUserId]
        : null;
      
      return newState;
    default:
      return state;
  }
};

export default connectionsReducer;