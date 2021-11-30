import React from "react";
import LeftProfileBox from "./left_profile_box";
import PostIndexContainer from "./posts/post_index_container";
import { FEED } from "../../util/url_paths_util";
import RightProfileBox from "./posts/right_profile_box";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch(this.props.url) {
      case FEED:
        if (!this.props.currentUser) return null;
        return this.postIndex();
      default:
        return null;
    }
  }

  postIndex() {
    let { currentUser } = this.props;

    return (
      <div className="whole-feed-page">
        <LeftProfileBox
          currentUser={currentUser}
        />

        <PostIndexContainer
          currentUser={currentUser}
        />

        <RightProfileBox />
      </div>
    );
  }
}