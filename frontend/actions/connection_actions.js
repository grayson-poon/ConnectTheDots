import * as ConnectionsApiUtil from "../util/connections_api_util";

export const RECEIVE_WHOLE_CONNECTIONS = "RECEIVE_WHOLE_CONNECTIONS";
export const RECEIVE_CONNECTIONS = "RECEIVE_CONNECTIONS";
export const REMOVE_CONNECTIONS = "REMOVE_CONNECTIONS";
export const RECEIVE_CONNECTION_ERRORS = "RECEIVE_CONNECTION_ERRORS";

const receiveWholeConnections = ({ connections, pendingConnections }) => {
  return {
    type: RECEIVE_WHOLE_CONNECTIONS,
    connections,
    pendingConnections,
  };
};

const receiveConnections = ({ connections }) => {
  return {
    type: RECEIVE_CONNECTIONS,
    connections,
  };
};

const removeConnections = ({ notCurrentUserId, currentUserId }) => {
  return {
    type: REMOVE_CONNECTIONS,
    notCurrentUserId,
    currentUserId,
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

export const createConnections = (connection) => (dispatch) => {
  return ConnectionsApiUtil.createConnection(connection).then(
    (connections) => dispatch(receiveConnections(connections)),
    (errors) => dispatch(receiveConnectionErrors(errors.responseJSON))
  );
};

export const deleteConnections = (connectionId) => (dispatch) => {
  return ConnectionsApiUtil.deleteConnections(connectionId).then(
    (connections) => dispatch(removeConnections(connections)),
    (errors) => dispatch(receiveConnectionErrors(errors.responseJSON))
  );
};