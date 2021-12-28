export const fetchPosts = (userId) => {
  switch(userId) {
    case null:
      return $.ajax({
        method: "GET",
        url: "/api/posts",
      });
    default:
      return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/activity`,
      });
  }
};

export const createPost = (post) => {
  return $.ajax({
    method: "POST",
    url: "/api/posts",
    data: post,
    contentType: false,
    processData: false,
  });
};

export const updatePost = (post) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/posts/${post.id}`,
    data: post,
    contentType: false,
    processData: false,
  });
};

export const deletePost = (postId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/posts/${postId}`,
  });
};