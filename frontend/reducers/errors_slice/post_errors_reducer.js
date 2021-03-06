import {
  RECEIVE_POST,
  RECEIVE_POST_ERRORS,
  CLEAR_POST_ERRORS,
  RECEIVE_WHOLE_POSTS,
} from "../../actions/post_actions";

const postErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WHOLE_POSTS:
      return [];
    case RECEIVE_POST:
      return [];
    case RECEIVE_POST_ERRORS:
      return action.errors;
    case CLEAR_POST_ERRORS:
      return [];
    default:
      return state;
  }
};

export default postErrorsReducer;
