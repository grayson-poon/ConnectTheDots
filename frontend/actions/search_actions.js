import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";

const receiveSearchResults = ({ users }) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    users,
  };
};

const clearSearchResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS,
  }
}

const receiveSearchErrors = (errors) => {
  return {
    type: RECEIVE_SEARCH_ERRORS,
    errors,
  }
}

export const searchUsers = (string) => (dispatch) => {
  return SearchApiUtil.searchUsers(string).then(
    (users) => dispatch(receiveSearchResults(users)),
    (errors) => dispatch(receiveSearchErrors(errors.responseJSON))
  );
};

export const clearSearch = () => (dispatch) => {
  return dispatch(clearSearchResults());
}