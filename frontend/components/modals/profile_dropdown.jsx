import React from "react";

export default class ProfileDropdownModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    return this.props.show ? this.show() : null;
  }

  show() {
    let { currentUser, logout } = this.props;

    return (
      <div>
        <div className="profile-dropdown">
          <div className="information">
            <div id="image">
              <img src={currentUser.profilePicture} />
            </div>

            <div id="titles">
              <ul>
                <li>
                  {currentUser.firstName} {currentUser.lastName}
                </li>
                <li>{currentUser.headline}</li>
              </ul>
            </div>
          </div>

          <div className="view-profile">
            <button>View Profile</button>
          </div>

          <div className="logout-user">
            <button onClick={logout}>Sign Out</button>
          </div>
        </div>
      </div>
    );
  }
}