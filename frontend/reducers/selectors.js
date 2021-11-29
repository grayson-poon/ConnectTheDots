// select data from the store
export const selectAllPosts = (state) => Object.values(state.entities.posts);