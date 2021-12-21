import * as ConnectionsApiUtil from "../util/connections_api_util";

export const RECEIVE_WHOLE_CONNECTIONS = "RECEIVE_WHOLE_CONNECTIONS";
export const RECEIVE_CONNECTION = "RECEIVE_CONNECTION";
export const REMOVE_CONNECTIONS = "REMOVE_CONNECTIONS";
export const RECEIVE_CONNECTION_ERRORS = "RECEIVE_CONNECTION_ERRORS";

const receiveWholeConnections = ({ connectedUsers, pendingUsers, userId }) => {
  return {
    type: RECEIVE_WHOLE_CONNECTIONS,
    connectedUsers,
    pendingUsers,
    userId,
  };
};

const receiveConnection = ({ currentUserId, notCurrentUserId, requestAccepted }) => {
  debugger
  return {
    type: RECEIVE_CONNECTION,
    currentUserId,
    notCurrentUserId,
    requestAccepted,
  };
};

const removeConnections = ({ currentUserId, notCurrentUserId }) => {
  return {
    type: REMOVE_CONNECTIONS,
    currentUserId,
    notCurrentUserId,
  };
};

const receiveConnectionErrors = ( errors ) => {
  return {
    type: RECEIVE_CONNECTION_ERRORS,
    errors,
  };
};

export const fetchConnections = (userId = null) => (dispatch) => {
  return ConnectionsApiUtil.fetchConnections(userId).then(
    (payload) => dispatch(receiveWholeConnections(payload)),
    (errors) => dispatch(receiveConnectionErrors(errors.responseJSON))
  );
};

export const createConnection = (connectionId) => (dispatch) => {
  return ConnectionsApiUtil.createConnection(connectionId).then(
    (payload) => dispatch(receiveConnection(payload)),
    (errors) => dispatch(receiveConnectionErrors(errors.responseJSON))
  );
};

export const deleteConnections = (connectionId) => (dispatch) => {
  return ConnectionsApiUtil.deleteConnections(connectionId).then(
    (idPairs) => dispatch(removeConnections(idPairs)),
    (errors) => dispatch(receiveConnectionErrors(errors.responseJSON))
  );
};