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
    let { posts, users, currentUser, createPost } = this.props;
    
    if (Object.keys(posts).length === 0) return null;

    return (
      <div className="post-index">
        <NewPostForm
          createPost={createPost}
          currentUser={currentUser}
        />

        <div className="posts-list">
          <ul>
            <li></li>
            {Object.values(posts).map((post) => (
              <PostIndexItem
                key={post.id}
                post={post}
                user={users[post.userId]}
                currentUser={currentUser}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}