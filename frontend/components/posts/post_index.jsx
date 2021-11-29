import React from "react";
import { ACTIVITY_TAIL, FEED } from "../../util/url_paths_util";

export default class Post extends React.Component {
  componentDidMount() {
    switch(this.props.url) {
      case FEED:
        return this.props.fetchPosts(FEED);
      case this.props.includes(ACTIVITY_TAIL):
        return this.props.fetchPosts(ACTIVITY_TAIL, this.props.match.params.userId);
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        {/* {this.props.comments.map((comment) => (
          <Comment comment={comment} />
          ))} */}
      </div>
    )
  }
}