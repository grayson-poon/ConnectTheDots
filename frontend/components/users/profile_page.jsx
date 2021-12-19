import React from "react";
import ProfileMain from "./profile_page_components/profile_main";
import ActivitySection from "./profile_page_components/activity_section";
import ProfilePictureModal from "../modals/profile_picture_modal";

export default class UserShow extends React.Component {
  componentDidMount() {
    let urlId = parseInt(this.props.match.params.userId);
    let { currentUserId } = this.props;
    
    return urlId === currentUserId
      ? null
      : this.props.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    let urlId = this.props.match.params.userId;

    if (urlId !== prevProps.match.params.userId) {
      this.props.fetchUser(urlId);
    }
  }

  render() {
    return this.props.user ? this.profile() : null;
  }

  profile() {
    let { user, currentUser, openModal } = this.props;

    return (
      <div className="profile-page">
        <div className="profile-middle">
          <ProfileMain
            currentUser={currentUser}
            user={user}
            openModal={openModal}
          />

          <ActivitySection
            currentUser={currentUser}
            user={user}
            openModal={openModal}
          />
        </div>
      </div>
    );
  }
};