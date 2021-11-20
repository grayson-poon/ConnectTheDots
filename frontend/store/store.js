import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/root_reducer.js";
import logger from "redux-logger";
import thunk from "../middleware/thunk";

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger) // take out logger before deploying
  );
};

export default configureStore;
