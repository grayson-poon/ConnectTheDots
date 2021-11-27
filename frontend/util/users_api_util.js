export const createUser = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: user,
    contentType: false,
    processData: false,
  });

export const fetchUser = (userId) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}`,
  })
);

export const updateUser = (user) => {
  debugger
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: user,
    contentType: false,
    processData: false,
  })
};