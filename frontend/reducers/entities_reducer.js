import { combineReducers } from "redux";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  
  /*
  profiles: profilesReducer,
  post: postsReducer,
  comments: commentsReducer,
  */
});

export default entitiesReducer;