import { ACTIVITY, FEED } from "./fetch_constants";

export const fetchPosts = (page, userId) => {
  switch (page) {
    case FEED:
      return $.ajax({
        method: "GET",
        url: "/api/posts",
      });
    case ACTIVITY:
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