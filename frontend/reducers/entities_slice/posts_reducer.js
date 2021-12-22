import { 
  RECEIVE_WHOLE_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from "../../actions/post_actions";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";

const _nullPosts = Object.freeze({});

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_WHOLE_POSTS:
      action.posts.map((post) => {
        newState[post.id] = post;
      });

      return newState;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      delete newState[action.post.id];
      return newState;
    case LOGOUT_CURRENT_USER:
      return _nullPosts;
    default:
      return state;
  };
};

export default postsReducer;