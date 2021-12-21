import { RECEIVE_CONNECTION, RECEIVE_WHOLE_CONNECTIONS, REMOVE_CONNECTIONS } from "../../actions/connection_actions";
import { RECEIVE_WHOLE_POSTS } from "../../actions/post_actions";
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_USER } from "../../actions/user_actions";

const _nullUsers = Object.freeze({});

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let idx;
  let currentUser;
  let otherIdx;
  let notCurrentUser;

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
    case RECEIVE_CONNECTION:
      currentUser = newState[action.currentUserId];
      notCurrentUser = newState[action.notCurrentUserId];

      if (action.requestAccepted) {
        idx = currentUser.pendingIds.indexOf(parseInt(action.notCurrentUserId));

        if (idx > -1) {
          currentUser.pendingIds.splice(idx, 1);
          currentUser.connectionIds.push(action.notCurrentUserId);
          notCurrentUser.connectionIds.push(action.currentUserId);
        }
      } else {
        notCurrentUser.pendingIds.push(parseInt(action.currentUserId));
      }
      
      return newState;
    case REMOVE_CONNECTIONS:
      currentUser = newState[action.currentUserId];
      notCurrentUser = newState[action.notCurrentUserId];

      if (currentUser.connectionIds.includes(parseInt(action.notCurrentUserId))) {
        idx = currentUser.connectionIds.indexOf(parseInt(action.notCurrentUserId));
        otherIdx = notCurrentUser.connectionIds.indexOf(parseInt(action.currentUserId));
        currentUser.connectionIds.splice(idx, 1);
        notCurrentUser.connectionIds.splice(otherIdx, 1);
      } else if (currentUser.pendingIds.includes(parseInt(action.notCurrentUserId))) {
        idx = currentUser.pendingIds.indexOf(parseInt(action.notCurrentUserId));
        currentUser.pendingIds.splice(idx, 1);
      } else if (notCurrentUser.pendingIds.includes(parseInt(action.currentUserId))) {
        otherIdx = notCurrentUser.pendingIds.indexOf(parseInt(action.currentUserId));
        notCurrentUser.pendingIds.splice(otherIdx, 1);
      }

      return newState;
    case LOGOUT_CURRENT_USER:
      return _nullUsers;
    default:
      return state;
  }
};

export default usersReducer;