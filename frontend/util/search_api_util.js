export const searchUsers = (string) => {
  return $.ajax({
    method: "GET",
    url: `/api/user_search`,
    data: string,
  });
};