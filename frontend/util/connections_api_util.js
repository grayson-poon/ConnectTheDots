export const fetchConnections = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/connections/${userId}`,
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