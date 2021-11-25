import { combineReducers } from "redux";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  
  /*
  post: postsReducer,
  comments: commentsReducer,
  */
});

export default entitiesReducer;