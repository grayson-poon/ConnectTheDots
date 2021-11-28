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

export const fetchFeedPosts = () => {
  return $.ajax({
    method: "GET",
    url: "/api/posts",
  });
};

export const fetchActivityPosts = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/activity`,
  });
};