import { RECEIVE_WHOLE_CONNECTIONS, REMOVE_CONNECTIONS } from "../../actions/connection_actions";
import { RECEIVE_WHOLE_POSTS } from "../../actions/post_actions";
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_USER } from "../../actions/user_actions";

const _nullUsers = Object.freeze({});

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_WHOLE_CONNECTIONS:
      action.connectedUsers.map((user) => {
        newState[user.id] = user;
      });

      action.pendingUsers.map((user) => {
        newState[user.id] = user;
      });

      return newState;
    case RECEIVE_WHOLE_POSTS:
      action.connectedUsers.map((user) => {
        newState[user.id] = user;
      });

      return newState;
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser.id] = action.currentUser;
      return newState;
    case REMOVE_CONNECTIONS:
      delete newState[action.notCurrentUserId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return _nullUsers;
    default:
      return state;
  }
};

export default usersReducer;