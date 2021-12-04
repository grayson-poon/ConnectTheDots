import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { updateUser, clearUserErrors } from "../../actions/user_actions";
import { CLOSE_BUTTON } from "../../util/images_and_icons_util";

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {

    return (
      <div className="edit-user-modal-background">
        <div className="edit-user-modal">
          <div className="edit-user-header">
            <div id="words">Edit intro</div>
            <div id="close-button">
              <button onClick={this.handleClose}>
                <img src={CLOSE_BUTTON} />
              </button>
            </div>
          </div>

          <div className="required">* indicates required</div>

          <div className="edit-user-input-container">
            <div>First name*</div>
            <div className="edit-user-input">
              <input
                type="text"
                onChange={this.updateField("firstName")}
                value={this.state.user.firstName}
                required
              />
            </div>
          </div>

          <div className="edit-user-input-container">
            <div>Last Name*</div>
            <div className="edit-user-input">
              <input
                type="text"
                onChange={this.updateField("lastName")}
                value={this.state.user.lastName}
                required
              />
            </div>
          </div>

          <div className="edit-user-input-container">
            <div>Preferred Pronouns</div>
            <div className="edit-user-input">
              <input
                type="text"
                onChange={this.updateField("pronouns")}
                value={this.state.user.pronouns}
              />
            </div>
          </div>

          <div className="edit-user-input-container">
            <div>City, State* (Ex: San Francisco, California)</div>
            <div className="edit-user-input">
              <input
                type="text"
                onChange={this.updateField("currentLocation")}
                value={this.state.user.currentLocation}
                required
              />
            </div>
          </div>

          <div className="edit-user-input-container">
            <div>Most recent job title*</div>
            <div className="edit-user-input">
              <input
                type="text"
                onChange={this.updateField("headline")}
                value={this.state.user.headline}
                required
              />
            </div>
          </div>

          <div className="edit-user-input-container">
            <div>About</div>
            <div className="edit-user-input">
              <textarea
                onChange={this.updateField("about")}
                rows="9"
                value={this.state.user.about}
                placeholder="Type here..."
              />
            </div>
          </div>

          <div id="submit-button">
            <button onClick={this.handleSubmit}>Update user</button>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    let { updateUser, closeModal } = this.props;

    Object.entries(this.state.user).forEach(([key, value]) => {
      key = key === "profilePicture" && value ? "photo" : key;
      formData.append(`user[${key}]`, value);
    });

    updateUser(formData).then(() => closeModal());
  }

  updateField(field) {
    let user = Object.assign({}, this.state.user);

    return (event) => {
      user[field] = event.target.value;
      this.setState({ user });
    };
  }

  displayErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    );
  }

  handleClose() {
    this.props.clearUserErrors();
    this.props.closeModal();
  }
};

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    errors: state.errors.userErrors,
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateUser: (user) => dispatch(updateUser(user)),
    clearUserErrors: () => dispatch(clearUserErrors()),
  };
};

export default connect(mSTP, mDTP)(EditUser);