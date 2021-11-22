import React from "react";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    // fetchPosts()
  }

  render() {
    return (
      <div>
        Posts go here on the feed
        {/* {this.props.posts.map((post) => (
          <Post post={post} />
        ))} */}
      </div>
    )
  }
}