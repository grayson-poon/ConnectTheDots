import { 
  RECEIVE_FEED_POSTS,
  RECEIVE_ACTIVITY_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from "../actions/post_actions";

const postsReducer = (state = {}, action)  => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_FEED_POSTS:
      return action.feedPosts;
    case RECEIVE_ACTIVITY_POSTS:
      return action.activityPosts;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;