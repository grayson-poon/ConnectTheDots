import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import userErrorsReducer from "./user_errors_reducer";
import postErrorsReducer from "./post_errors_reducer";

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  userErrors: userErrorsReducer,
  postErrors: postErrorsReducer,
});

export default errorsReducer;