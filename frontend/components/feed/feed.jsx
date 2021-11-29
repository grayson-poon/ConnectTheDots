import React from "react";
import { DEFAULT_BACKGROUND_PICTURE, DEFAULT_PROFILE_PICTURE } from "../../util/images_and_icons_util";
import { FEED } from "../../util/url_paths_util";
import PostIndexContainer from "../posts/post_index_container";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.currentUser && this.props.currentUserId)
      this.props.fetchUser(this.props.currentUserId);
    
    switch(this.props.url) {
      case FEED:
        if (!this.props.currentUser) return null;
        return this.postIndex();
      default:
        return null;
    }
  }


  postIndex() {
    let { currentUserId, currentUser } = this.props;

    return (
      <div className="whole-feed-page">
        {/* <div className="left-profile-box">
          <div className="left-profile-background">
            <img src={DEFAULT_BACKGROUND_PICTURE} />
          </div>

          <div className="left-profile-image">
            <img src={
              currentUser.profilePicture
                ? currentUser.profilePicture
                : DEFAULT_PROFILE_PICTURE
              }
            />
          </div>
        </div> */}

        <PostIndexContainer currentUserId={currentUserId} />
      </div>
    )
  }
}