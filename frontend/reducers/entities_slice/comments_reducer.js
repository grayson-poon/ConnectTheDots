import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import { 
  RECEIVE_WHOLE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from "../../actions/comment_actions";

const _nullComments = Object.freeze({});

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  debugger
  switch(action.type) {
    case RECEIVE_WHOLE_COMMENTS:
      action.comments.map((comment) => {
        newState[comment.id] = comment;
      });

      return newState;
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;
    case LOGOUT_CURRENT_USER:
      return _nullComments;
    default:
      return state;
  };
};

export default commentsReducer;