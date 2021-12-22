import { combineReducers } from "redux";
import sessionErrorsReducer from "./errors_slice/session_errors_reducer";
import userErrorsReducer from "./errors_slice/user_errors_reducer";
import postErrorsReducer from "./errors_slice/post_errors_reducer";
import commentErrorsReducer from "./errors_slice/comment_errors_reducer";

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  userErrors: userErrorsReducer,
  postErrors: postErrorsReducer,
  commentErrors: commentErrorsReducer,
});

export default errorsReducer;