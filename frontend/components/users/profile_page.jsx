import React from "react";
import ProfileMain from "./profile_page_components/profile_main";
import ActivitySection from "./profile_page_components/activity_section";
import ProfilePictureModal from "../modals/profile_picture_modal";

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePicture: false,
      backgroundPicture: false,
      profileForm: false,
      postForm: false,
      keyCounter: 0,
    }

    this.showModal = this.showModal.bind(this);
  }

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
    return this.props.showUser ? this.profile() : null;
  }

  showModal(field, status) {
    this.setState({ [field]: status });
  }

  displayErrors() {
    let { errors } = this.props;
  
    return (
      <div>
        <ul>
          {Object.values(errors).map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }

  profile() {
    let { showUser, updateUser } = this.props;
    ++this.state.keyCounter;

    return (
      <div className="profile-page">
        <div className="profile-middle">
          <ProfileMain showUser={showUser} showModal={this.showModal} />
          <ActivitySection showUser={showUser} showModal={this.showModal} />
        </div>

        <ProfilePictureModal
          showUser={showUser}
          updateUser={updateUser}
          show={this.state.profilePicture}
          showModal={this.showModal}
          key={this.state.keyCounter}
        />
      </div>
    );
  }

  loading() {
    return (
      <div className="loading-profile">
        loading profile
      </div>
    )
  }
};