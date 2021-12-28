import React from "react";
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE, POST_PICTURE_ICON, REMOVE_BUTTON } from "../../util/images_and_icons_util";
import { LOGIN_FORM, SIGNUP_FORM } from "../../util/url_paths_util";

const PREVIOUS = "PREVIOUS";
const NEXT = "NEXT";

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      formNum: 1,
      photoUrl: null,
    };

    this.updateFormNum = this.updateFormNum.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeFile = this.removeFile.bind(this);
  }

  render() {
    switch (this.state.formNum) {
      case 1:
        return this.emailPasswordForm();
      case 2:
        return this.namePronounsForm();
      case 3:
        return this.currentLocationForm();
      case 4:
        return this.headlineForm();
      case 5:
        return this.profilePictureForm();
      case 6:
        return this.aboutForm();
      default:
        return <div>Form does not exist</div>;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    event.target.value === "Demo User"
      ? this.props.login(this.props.demoUser)
      : null;

    const formData = new FormData();

    Object.entries(this.state.user).forEach(([key, value]) => {
      key = (key === "profilePicture" && value ? "photo" : key);
      formData.append(`user[${key}]`, value);
    });

    this.props.createUser(formData);
  }

  handleFile(event) {
    const fileReader = new FileReader();
    let user = Object.assign({}, this.state.user);
    let file = event.currentTarget.files[0];

    fileReader.onloadend = () => {
      user["profilePicture"] = file ? file : "";
      this.setState({ user, photoUrl: fileReader.result });
    };

    if (file) fileReader.readAsDataURL(file);
  }

  removeFile(event) {
    event.preventDefault();

    let user = Object.assign({}, this.state.user);
    user["profilePicture"] = null;

    this.setState({ user, photoUrl: null });
  }

  updateField(field) {
    let user = Object.assign({}, this.state.user);
    return (event) => {
      user[field] = event.target.value;
      this.setState({ user });
    };
  }

  updateFormNum(event) {
    event.preventDefault();
    this.props.clearUserErrors();

    event.target.value === NEXT
      ? this.setState({ formNum: this.state.formNum + 1 })
      : this.setState({ formNum: this.state.formNum - 1 });
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

  emailPasswordForm() {
    return (
      <div className="signup-form-page">
        <div className="gray-background"></div>
        <div className="signup-form-header">
          Make the most out of your professional life
        </div>
        <div className="signup-form">
          <div className="signup-input-container">
            <div>Email*</div>
            <div className="signup-input">
              <input
                type="text"
                onChange={this.updateField("email")}
                value={this.state.user.email}
                required
              />
            </div>
          </div>

          <div className="signup-input-container">
            <div>Password* (6 or more characters)</div>
            <div className="signup-input">
              <input
                type="password"
                onChange={this.updateField("password")}
                value={this.state.user.password}
                required
              />
            </div>
          </div>

          <div className="signup-buttons">
            {this.state.user.password.length >= 6 &&
            this.state.user.email.length > 0 ? (
              <button onClick={this.updateFormNum} value={NEXT}>
                Next
              </button>
            ) : null}
          </div>

          <div id="signup-message">
            <div>Already on ConnectTheDots?</div>
            <Link to={LOGIN_FORM}>Sign in</Link>
          </div>

          <div className="demo-user-alternate">
            <div>Don't want to be bothered with a long signup process?</div>
            <button
              id="demo-user"
              onClick={this.handleSubmit}
              value="Demo User"
            >
              Demo User
            </button>
          </div>
        </div>
      </div>
    );
  }

  namePronounsForm() {
    return (
      <div className="signup-form-page">
        <div className="gray-background"></div>
        <div className="signup-form-header">Who are you?</div>
        <div className="signup-form">
          <div className="signup-input-container">
            <div>First Name*</div>
            <div className="signup-input">
              <input
                type="text"
                onChange={this.updateField("firstName")}
                value={this.state.user.firstName}
                required
              />
            </div>
          </div>

          <div className="signup-input-container">
            <div>Last Name*</div>
            <div className="signup-input">
              <input
                type="text"
                onChange={this.updateField("lastName")}
                value={this.state.user.lastName}
                required
              />
            </div>
          </div>

          <div className="signup-input-container">
            <div>Preferred Pronouns</div>
            <div className="signup-input">
              <input
                type="text"
                onChange={this.updateField("pronouns")}
                value={this.state.user.pronouns}
              />
            </div>
          </div>

          <div className="signup-buttons">
            {this.state.user.firstName.length > 0 &&
            this.state.user.lastName.length > 0 ? (
              <button onClick={this.updateFormNum} value={NEXT}>
                Next
              </button>
            ) : null}
            <button onClick={this.updateFormNum} value={PREVIOUS}>
              Previous
            </button>
          </div>
        </div>
      </div>
    );
  }

  currentLocationForm() {
    return (
      <div className="signup-form-page">
        <div className="gray-background"></div>
        <div className="signup-form-header">
          <h1>Where are you currently located?</h1>
        </div>
        <div className="signup-form">
          <div className="signup-input-container">
            <div>City, State* (San Francisco, California)</div>
            <div className="signup-input">
              <input
                type="text"
                onChange={this.updateField("currentLocation")}
                value={this.state.user.currentLocation}
                required
              />
            </div>
          </div>

          <div className="signup-buttons">
            {this.state.user.currentLocation.length > 0 ? (
              <button onClick={this.updateFormNum} value={NEXT}>
                Next
              </button>
            ) : null}
            <button onClick={this.updateFormNum} value={PREVIOUS}>
              Previous
            </button>
          </div>
        </div>
      </div>
    );
  }

  headlineForm() {
    return (
      <div className="signup-form-page">
        <div className="gray-background"></div>

        <div className="signup-form-header">
          <h1>Your profile helps you discover new people and opportunities</h1>
        </div>
        <div className="signup-form">
          <div className="signup-input-container">
            <div>Most recent job title*</div>
            <div className="signup-input">
              <input
                type="text"
                onChange={this.updateField("headline")}
                value={this.state.user.headline}
                required
              />
            </div>
          </div>

          <div className="signup-buttons">
            {this.state.user.headline.length > 0 ? (
              <button onClick={this.updateFormNum} value={NEXT}>
                Next
              </button>
            ) : null}
            <button onClick={this.updateFormNum} value={PREVIOUS}>
              Previous
            </button>
          </div>
        </div>
      </div>
    );
  }

  profilePictureForm() {
    return (
      <div className="signup-form-page">
        <div className="gray-background"></div>
        <div className="signup-form-header">Add a picture of yourself</div>

        <div className="signup-form">
          <div className="image-preview">
            {this.state.photoUrl ? (
              <img src={this.state.photoUrl} />
            ) : (
              <img src={DEFAULT_PROFILE_PICTURE} />
            )}
          </div>

          <div className="image-buttons">
            <label className="image-input">
              <img src={POST_PICTURE_ICON} />
              Upload
              <input type="file" onChange={this.handleFile} accept="image/*" />
            </label>

            <div className="remove-button">
              <button onClick={this.removeFile}>
                <img src={REMOVE_BUTTON} />
                Remove
              </button>
            </div>
          </div>

          <div className="signup-buttons">
            <button onClick={this.updateFormNum} value={NEXT}>
              Next
            </button>
            <button onClick={this.updateFormNum} value={PREVIOUS}>
              Previous
            </button>
          </div>
        </div>
      </div>
    );
  }

  aboutForm() {
    return (
      <div className="signup-form-page">
        <div className="gray-background"></div>
        <div className="signup-form-header">
          <h1>Tell us a little bit about yourself</h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            onChange={this.updateField("about")}
            value={this.state.user.about}
            placeholder="Type here..."
            rows="9"
          />

          <div className="signup-buttons">
            <input type="submit" value={this.props.formType} />
            <button onClick={this.updateFormNum} value={PREVIOUS}>
              Previous
            </button>
          </div>
          <div className="form-errors">{this.displayErrors()}</div>
        </form>
      </div>
    );
  }
};