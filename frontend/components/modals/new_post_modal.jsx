import React from "react";

export default class NewPostModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { creatPost } = this.props;

    return (
      <div className="new-post-modal">

        <div className="post-form-errors"></div>
      </div>
    );
  }
}