import * as PostsApiUtil from "../util/posts_api_util";

export const RECEIVE_WHOLE_POSTS = "RECEIVE_WHOLE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const CLEAR_POST_ERRORS = "CLEAR_POST_ERRORS";

const receiveWholePosts = ({ posts, connectedUsers, currentUserId }) => {
  return {
    type: RECEIVE_WHOLE_POSTS,
    posts,
    connectedUsers,
    currentUserId,
  };
};

const receivePost = ({ post }) => {
  return {
    type: RECEIVE_POST,
    post,
  };
};

const removePost = ({ post }) => {
  return {
    type: REMOVE_POST,
    post
  }
}

const receivePostErrors = (errors) => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors,
  };
};

export const clearPostErrors = () => {
  return {
    type: CLEAR_POST_ERRORS,
  };
};

export const fetchPosts = (url, userId = null) => (dispatch) => {
  return PostsApiUtil.fetchPosts(url, userId).then(
    (payload) => dispatch(receiveWholePosts(payload)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  );
};

export const createPost = (post) => (dispatch) => {
  return PostsApiUtil.createPost(post).then(
    (post) => dispatch(receivePost(post)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  );
};

export const updatePost = (post) => (dispatch) => {
  return PostsApiUtil.updatePost(post).then(
    // (post) => console.log(post),
    (post) => dispatch(receivePost(post)),
    // (errors) => console.log(errors.responseJSON)
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  );
};

export const deletePost = (postId) => (dispatch) => {
  return PostsApiUtil.deletePost(postId).then(
    (post) => dispatch(removePost(post)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  );
};
