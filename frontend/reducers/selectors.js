// select data from the store
export const selectAllPosts = (state) => Object.values(state.entities.posts);
export const selectAllUsers = (state) => Object.values(state.entities.users);

export const selectPostComments = (state, postId) => (
  Object.values(state.entities.comments)
    .filter((comment) => comment.post_id === postId)
);