export const createPost = (post) => {
  return $.ajax({
    method: "POST",
    url: "/api/posts",
    data: post,
    contentType: false,
    processData: false,
  });
};

export const fetchPosts = (post) => {
  return $.ajax({
    method: "POST",
    url: "/api/posts",
    data: post,
    contentType: false,
    processData: false,
  });
};