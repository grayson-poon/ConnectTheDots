import { combineReducers } from "redux";
import usersReducer from "./entities_slice/users_reducer";
import postsReducer from "./entities_slice/posts_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  /*
  comments: commentsReducer,
  */
});

export default entitiesReducer;