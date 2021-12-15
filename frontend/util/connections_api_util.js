export const fetchConnections = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/connections/${userId}`,
  });
};

export const createConnection = (connection) => {
  return $.ajax({
    method: "POST",
    url: `/api/connections`,
    data: connection,
  });
};

export const deleteConnections = (connectionId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/connections/${connectionId}`
  });
};