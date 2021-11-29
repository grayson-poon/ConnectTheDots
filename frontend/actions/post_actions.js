import * as PostsApiUtil from "../util/posts_api_util";
import { FEED, ACTIVITY } from "../util/fetch_constants";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

const receivePosts = ({ posts }) => {
  return {
    type: RECEIVE_POSTS,
    posts
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

export const fetchPosts = (page, userId = null) => (dispatch) => {
  return PostsApiUtil.fetchPosts(page, userId).then(
    (posts) => dispatch(receivePosts(posts)),
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
    (post) => dispatch(receivePost(post)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  );
};

export const deletePost = (postId) => (dispatch) => {
  return PostsApiUtil.deletePost(postId).then(
    (post) => dispatch(removePost(post)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  );
};
