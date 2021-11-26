import React from "react";

export default class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    // debugger
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
    }
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

  render() {
    let { user, errors } = this.props;

    return user && errors ? this.profile() : this.loading();
  }

  profile() {
    let { user } = this.props;

    return (
      <div className="profile-page">
        <div className="profile-background-image"></div>

        <div>
          <button className="edit-profile-picture">
            {user.profilePicture ? (
              <img src={user.profilePicture} alt="profile picture" />
            ) : null}
          </button>
        </div>

        <div className="profile-info">
          <div className="profile-name">{`${user.firstName} ${user.lastName}`}</div>
          <div className="profile-headline">{`${user.headline}`}</div>
          <div className="profile-current-location">{`${user.currentLocation}`}</div>
          <div className="edit-profile"><button>Edit profile info</button></div>
        </div>

        <div className="activity">
          <div className="title-and-button">
            <h2>Activity</h2>
            <button>Start a post</button>
          </div>
          <h3>Number of followers</h3>
          <div className="activity-about">
            <p>Posts you created or commented on are displayed here</p>
          </div>
          <div className="activity-button">
            <button>See all activity</button>
          </div>
        </div>

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
  //   debugger
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