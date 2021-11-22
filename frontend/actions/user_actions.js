import * as UsersApiUtil from "../util/users_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = ({ user }) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors,
  }
};

export const createUser = (user) => (dispatch) => {
  return UsersApiUtil.createUser(user).then(
    (user) => dispatch(receiveUser(user)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
};

export const fetchUser = (userId) => (dispatch) => {
  return UsersApiUtil.fetchUser(userId).then(
    (user) => dispatch(receiveUser(user)),
    (errors) => dispatch(receiveErrors(errors))
  )
};

export const updateUser = (user) => (dispatch) => {
  return UsersApiUtil.updateUser(user).then(
    (user) => dispatch(receiveUser(user)),
    (errors) => dispatch(receiveErrors(errors))
  )
};