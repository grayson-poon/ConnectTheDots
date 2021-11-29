import { ACTIVITY_TAIL, FEED } from "./url_paths_util";

export const fetchPosts = (url, userId) => {
  switch (url) {
    case FEED:
      return $.ajax({
        method: "GET",
        url: "/api/posts",
      });
    case ACTIVITY_TAIL:
      return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/activity`,
      });
    default:
      return;
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