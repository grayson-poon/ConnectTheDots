import React from "react";

export default class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.fetchComments(this.props.post.id);
  }

  render() {
    let state = true;
    let { comments, post } = this.props;
    
    // post.commentIds.map((commentId) => {
    //   if (!comments[commentId]) state = false;
    // });
    // if (!state) return null;

    return (
      <div>
        {/* {this.props.body} */}
      </div>
    );
  }
}
