import React from "react";
import PostIndexItem from "./post_index_item";
import NewPostForm from "./new_post_form";
import { FEED } from "../../../util/url_paths_util";

export default class PostIndex extends React.Component {
  componentDidMount() {
    let { url, fetchPosts, fetchUser, currentUser } = this.props;

    switch(url) {
      case FEED:
        fetchUser(currentUser.id);
        return fetchPosts();
      default:
        fetchUser(this.props.match.params.userId);
        return fetchPosts(this.props.match.params.userId);
    }
  }

  render() {
    let { url } = this.props;
    
    switch(url) {
      case FEED:
        return this.showFeed();
      default:
        return this.showActivity();
    }
  }

  showFeed() {
    let { currentUser } = this.props;

    return (
      <div className="post-index">
        <NewPostForm currentUser={currentUser} />
        {this.postsList()}
      </div>
    );
  }

  showActivity() {
    return (
      <div className="post-index-background">
        <div className="post-index">
          {this.postsList() ? (
            <>
              <div className="activity-header-2">Activity</div>
              {this.postsList()}
            </>
          ) : (
            this.zeroActivity()
          )}
        </div>
      </div>
    );
  }

  postsList() {
    let { currentUser, posts, users } = this.props;
    if (Object.values(posts).length === 0) return null;

    return (
      <div className="posts-list">
        <ul>
          {Object.values(posts)
            .reverse()
            .map((post) => (
              <PostIndexItem
                key={post.id}
                post={post}
                user={users[post.userId]}
                currentUser={currentUser}
              />
            ))}
        </ul>
      </div>
    )
  }

  zeroActivity() {
    return (
      <div className="activity-header">
        <div>Activity</div>
        <div>No activity yet!</div>
      </div>
    )
  }
}