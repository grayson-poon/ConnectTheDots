import React from "react";

export default class UserShow extends React.Component {
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
          <div className="profile-middle-1">
            <div className="edit-background-image">
              <img
                src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/20-512.png"
                alt="default photo"
              />
            </div>

            <div className="profile-background-image">
              <img
                src="https://github.com/grayson-poon/ConnectTheDots/blob/main/app/assets/images/profile-background-image.jpg?raw=true"
                alt="default image"
              />
            </div>

            <div className="profile-picture">
              {user.profilePicture ? (
                <img
                  className="edit-profile-picture"
                  src={user.profilePicture}
                  alt="profile picture"
                  // onClick={}
                />
              ) : (
                <img
                  className="edit-profile-picture"
                  src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  alt="default-photo"
                />
              )}
            </div>

            <div className="profile-info">
              <div className="name-pronouns">
                <div className="profile-name">{`${user.firstName} ${user.lastName}`}</div>
                <div className="profile-pronouns">{user.pronouns}</div>
              </div>
              
              <div className="profile-headline">{`${user.headline}`}</div>
              <div className="profile-current-location">{`${user.currentLocation}`}</div>
              <div className="edit-profile">
                <button>Edit profile info</button>
              </div>
            </div>
          </div>

          <div className="profile-middle-2">
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