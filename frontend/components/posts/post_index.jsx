import React from "react";
import {
  ACTIVITY_TAIL,
  FEED
} from "../../util/url_paths_util";
import PostIndexItem from "./post_index_item";

export default class PostIndex extends React.Component {
  componentDidMount() {
    switch(this.props.url) {
      case FEED:
        debugger
        this.props.fetchPosts(this.props.url);
        break;
      case this.props.includes(ACTIVITY_TAIL):
        return this.props.fetchPosts(ACTIVITY_TAIL, this.props.match.params.userId);
      default:
        return null;
    }
  }

  render() {
    let { posts, users, currentUserId } = this.props;
    
    if (Object.keys(posts).length === 0 ||
      Object.keys(users).length === 0
      ) return null;

    return (
      <div className="post-index">
        <div className="new-post-form"></div>

        <div className="posts-list">
          <ul>
            {Object.values(posts).map((post) => (
              <PostIndexItem
                key={post.id}
                post={post}
                user={users[post.userId]}
                currentUserId={currentUserId}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}