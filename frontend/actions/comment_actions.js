import * as CommentApiUtil from "../util/comments_api_util";

export const RECEIVE_WHOLE_COMMENTS = "RECEIVE_WHOLE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS";

const receiveWholeComments = ({ comments, commentedUsers }) => {
  return {
    type: RECEIVE_WHOLE_COMMENTS,
    comments,
    commentedUsers,
  };
};

const receiveComment = ({ comment }) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};

const removeComment = ({ comment }) => {
  return {
    type: REMOVE_COMMENT,
    comment,
  };
};

const receiveCommentErrors = (errors) => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors,
  };
};

export const clearCommentErrors = () => {
  return {
    type: CLEAR_COMMENT_ERRORS,
  };
};

export const fetchComments = (postId) => (dispatch) => {
  return CommentApiUtil.fetchComments(postId).then(
    (payload) => dispatch(receiveWholeComments(payload)),
    (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
  );
};

export const createComment = (comment) => (dispatch) => {
  return CommentApiUtil.createComment(comment).then(
    (comment) => dispatch(receiveComment(comment)),
    (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
  );
};

export const updateComment = (comment) => (dispatch) => {
  return CommentApiUtil.updateComment(comment).then(
    (comment) => dispatch(receiveComment(comment)),
    (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
  );
};

export const deleteComment = (commentId) => (dispatch) => {
  return CommentApiUtil.deleteComment(commentId).then(
    (comment) => dispatch(removeComment(comment)),
    (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
  );
};