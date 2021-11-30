import React from "react";
import { Link } from "react-router-dom";
import { DEFAULT_BACKGROUND_PICTURE, DEFAULT_PROFILE_PICTURE } from "../../util/images_and_icons_util";
import { FEED, MY_NETWORK } from "../../util/url_paths_util";
import PostIndexContainer from "../posts/post_index_container";
import LeftProfileBox from "./left_profile_box";

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
      </div>
    );
  }
}