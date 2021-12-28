import React from "react";
import PostIndexItem from "./post_index_item";
import NewPostForm from "./new_post_form";
import { FEED } from "../../../util/url_paths_util";

export default class PostIndex extends React.Component {
  componentDidMount() {
    let { url, fetchPosts, fetchUser } = this.props;

    switch(url) {
      case FEED:
        return fetchPosts();
      default:
        fetchUser(this.props.match.params.userId);
        return fetchPosts(this.props.match.params.userId);
    }
  }

  render() {
    let { url, posts, users, currentUser } = this.props;
    
    return (
      <div className="post-index-background">
        <div className="post-index">
          {url === FEED ? <NewPostForm currentUser={currentUser} /> : null}

          {Object.values(posts).length === 0 ? null : (
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
          )}
        </div>
      </div>
    );
  }
}