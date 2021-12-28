export const fetchConnections = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/connections`,
  });
};

export const createConnection = (connectionId) => {
  return $.ajax({
    method: "POST",
    url: `/api/connections/${connectionId}`,
  });
};

export const deleteConnections = (connectionId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/connections/${connectionId}`
  });
};