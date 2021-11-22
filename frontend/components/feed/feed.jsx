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
        {/* {this.props.posts.map((post) => (
          <Post post={post} />
        ))} */}
      </div>
    )
  }
}