import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errrors_reducer";
import userErrorsReducer from "./user_errrors_reducer";

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  userErrors: userErrorsReducer,
});

export default errorsReducer;