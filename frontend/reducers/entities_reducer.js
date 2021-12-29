import { combineReducers } from "redux";
import usersReducer from "./entities_slice/users_reducer";
import postsReducer from "./entities_slice/posts_reducer";
import commentsReducer from "./entities_slice/comments_reducer";
import searchResultsReducer from "./entities_slice/search_results_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  searchResults: searchResultsReducer,
});

export default entitiesReducer;