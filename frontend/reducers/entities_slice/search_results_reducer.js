import { RECEIVE_SEARCH_RESULTS } from "../../actions/search_actions";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";

const searchResultsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [];

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      newState = action.users;
      return newState;
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return [];
  }
};

export default searchResultsReducer;