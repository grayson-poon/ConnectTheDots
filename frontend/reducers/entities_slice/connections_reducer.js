import { RECEIVE_CONNECTIONS, RECEIVE_WHOLE_CONNECTIONS, REMOVE_CONNECTIONS } from "../../actions/connection_actions";
import { RECEIVE_WHOLE_POSTS } from "../../actions/post_actions";

const connectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_WHOLE_CONNECTIONS:
      newState[action.connections[0].userId] = [];

      action.connections.map((connection) => {
        newState[connection.userId].push(connection.connectionId);
      });
      
      return newState;
    case RECEIVE_WHOLE_POSTS:
      newState[action.connections[0].userId] = [];

      action.connections.map((connection) => {
        newState[connection.userId].push(connection.connectionId);
      })
      
      return newState;
    case RECEIVE_CONNECTIONS:
      return;
    case REMOVE_CONNECTIONS:
      action.connections.map((connection) => {
        if (newState[connection.userId]) {
          let idx = newState[connection.userId].indexOf(connection.connectionId);
          if (idx > -1) newState[connection.userId].splice(idx, 1);
        }
      });
      
      return newState;
    default:
      return state;
  }
};

export default connectionsReducer;