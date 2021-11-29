import React from "react";

export default class Post extends React.Component {
  componentDidMount() {
    this.props.fetchFeedPosts()
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