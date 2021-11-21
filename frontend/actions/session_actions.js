import * as SessionsApiUtil from "../util/sessions_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const login = (user) => (dispatch) => (
  SessionsApiUtil.login(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
);

export const logout = () => (dispatch) => (
  SessionsApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);