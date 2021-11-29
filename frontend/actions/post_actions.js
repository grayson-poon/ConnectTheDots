import * as PostsApiUtil from "../util/posts_api_util";

export const RECEIVE_FEED_POSTS = "RECEIVE_FEED_POSTS";
export const RECEIVE_ACTIVITY_POSTS = "RECEIVE_ACTIVITY_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

const receiveFeedPosts = ({ posts }) => {
  return {
    type: RECEIVE_FEED_POSTS,
    feedPosts: posts,
  };
};

const receiveActivityPosts = ({ posts }) => {
  return {
    type: RECEIVE_ACTIVITY_POSTS,
    activityPosts: posts,
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

export const fetchFeedPosts = () => (dispatch) => {
  return PostsApiUtil.fetchFeedPosts().then(
    (posts) => dispatch(receiveFeedPosts(posts)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  );
};

export const fetchActivityPosts = () => (dispatch) => {
  return PostsApiUtil.fetchActivityPosts().then(
    (posts) => dispatch(receiveActivityPosts(posts)),
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
