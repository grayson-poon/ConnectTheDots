import { combineReducers } from "redux";
import usersReducer from "./entities_slice/users_reducer";
import postsReducer from "./entities_slice/posts_reducer";
import connectionsReducer from "./entities_slice/connections_reducer";
import pendingConnectionsReducer from "./entities_slice/pending_connections_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  connections: connectionsReducer,
  pendingConnections: pendingConnectionsReducer,
  /*
  comments: commentsReducer,
  */
});

export default entitiesReducer;