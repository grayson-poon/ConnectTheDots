import * as PostsApiUtil from "../util/posts_api_util";

export const RECEIVE_FEED_POSTS = "RECEIVE_FEED_POSTS";
export const RECEIVE_ACTIVITY_POSTS = "RECEIVE_ACTIVITY_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
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

const receivePostErrors = (errors) => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors,
  };
};