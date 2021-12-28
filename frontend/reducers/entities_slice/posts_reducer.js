import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../../actions/comment_actions";
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
  let post;
  let idx;

  switch(action.type) {
    case RECEIVE_WHOLE_POSTS:
      newState = {};
      
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
    case RECEIVE_COMMENT:
      post = newState[action.comment.postId];
      post.commentIds.push(action.comment.id);
      post.commentIds.sort((first, second) => second - first);

      return newState;
    case REMOVE_COMMENT:
      post = newState[action.comment.postId];
      idx = post.commentIds.indexOf(parseInt(action.comment.id));

      if (idx > -1) {
        post.commentIds.splice(idx, 1);
      }

      return newState;
    default:
      return state;
  };
};

export default postsReducer;