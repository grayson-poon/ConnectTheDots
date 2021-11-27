import React from "react";
import { Link } from "react-router-dom";
import { MY_NETWORK } from "../../util/url_paths_util";
import EditProfilePicture from "../modals/edit_profile_picture";
import ProfileMiddle1 from "./user_show_components/profile_middle_1";
import ProfileMiddle2 from "./user_show_components/profile_middle_2";

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePicture: false,
      backgroundPicture: false,
      profileForm: false,
      postForm: false,
    }

    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  render() {
    let { user, errors } = this.props;

    return user && errors ? this.profile() : this.loading();
  }

  showModal(field) {
    this.setState({ [field]: true });
  }

  displayErrors() {
    return (
      <div>
        <ul>
          {this.props.errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
    )
  }

  profile() {
    let { user } = this.props;

    return (
      <div className="profile-page">
        <div className="profile-middle">
          <ProfileMiddle1 user={user} showModal={this.showModal} />
          <ProfileMiddle2 />
        </div>
        <EditProfilePicture show={this.state.profilePicture} />
        {this.displayErrors()}
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

  // render() {
  //   return user && this.props.errors ? (
  //     <div>
  //       {user ? (
  //         <>
            
  //         </>
  //       ) : (
  //         <>{this.displayErrors()}</>
  //       )}
  //     </div>
  //   ) : (
  //     <div>loading...</div>
  //   );
  // }
};