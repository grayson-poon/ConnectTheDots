import * as UsersApiUtil from "../util/users_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

const recieveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const createUser = (user) => (dispatch) => (
  UsersApiUtil.createUser(user)
    .then((user) => dispatch(recieveUser(user))) // add another .then for logging user in?
);

export const fetchUser = (userId) => (dispatch) => (
  UsersApiUtil.fetchUser(userId)
    .then((user) => dispatch(recieveUser(user)))
);

export const updateUser = (user) => (dispatch) => (
  UsersApiUtil.updateUser(user)
    .then((user) => dispatch(recieveUser(user)))
);