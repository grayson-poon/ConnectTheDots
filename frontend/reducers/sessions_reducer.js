import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_ERRORS,
} from "../actions/session_actions";

const sessionsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      console.log(action.currentUser);
      return { currentUserId: action.currentUser.id }
    case LOGOUT_CURRENT_USER:
      return { currentUserId: null }
    default:
      return state;
  }
};

export default sessionsReducer;