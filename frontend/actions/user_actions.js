import * as UsersApiUtil from "../util/users_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = ({ user }) => {
  debugger

  return {
    type: RECEIVE_USER,
    user
  };
}


export const createUser = (user) => (dispatch) => {
  debugger
  return UsersApiUtil.createUser(user).then((res) => console.log(res, "res"))
};

export const fetchUser = (userId) => (dispatch) => (
  UsersApiUtil.fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)))
);

export const updateUser = (user) => (dispatch) => (
  UsersApiUtil.updateUser(user)
    .then((user) => dispatch(receiveUser(user)))
);