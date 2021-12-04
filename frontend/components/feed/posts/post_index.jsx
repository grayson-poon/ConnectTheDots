import React from "react";
import PostIndexItem from "./post_index_item";
import NewPostForm from "./new_post_form";
import {
  ACTIVITY_TAIL,
  FEED
} from "../../../util/url_paths_util";

export default class PostIndex extends React.Component {
  componentDidMount() {
    switch(this.props.url) {
      case FEED:
        return this.props.fetchPosts(this.props.url);
      case this.props.includes(ACTIVITY_TAIL):
        return this.props.fetchPosts(ACTIVITY_TAIL, this.props.match.params.userId);
      default:
        return null;
    }
  }

  render() {
    let { posts, users, currentUser, updatePost, openModal } = this.props;
    
    return (
      <div className="post-index">
        <NewPostForm currentUser={currentUser} openModal={openModal} />

        {Object.values(posts).length === 0 ? null : (
          <div className="posts-list">
            <ul>
              <li></li>
              {Object.values(posts)
                .reverse()
                .map((post) => (
                  <PostIndexItem
                    key={post.id}
                    post={post}
                    user={users[post.userId]}
                    currentUser={currentUser}
                    updatePost={updatePost}
                    openModal={openModal}
                  />
                ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}