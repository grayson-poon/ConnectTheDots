import React from "react";

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
    const formData = new FormData();

    Object.entries(this.state.user).forEach(([key, value]) => {
      key = (key === "profilePicture" ? "photo" : key);
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

  updateField(field) {
    let user = Object.assign({}, this.state.user);
    return (event) => {
      user[field] = event.target.value;
      this.setState({ user });
    };
  }

  updateFormNum(event) {
    event.preventDefault();

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
      <form>
        <div className="signup-message">
          <h1>Make the most out of your professional life</h1>
        </div>

        <label>
          Email*
          <input
            type="text"
            onChange={this.updateField("email")}
            value={this.state.user.email}
            required
          />
        </label>

        <label>
          Password*
          <input
            type="password"
            onChange={this.updateField("password")}
            value={this.state.user.password}
            required
          />
        </label>

        <button onClick={this.updateFormNum} value={NEXT}>
          Next
        </button>
      </form>
    );
  }

  namePronounsForm() {
    return (
      <form>
        <label>
          First Name*
          <input
            type="text"
            onChange={this.updateField("firstName")}
            value={this.state.user.firstName}
            required
          />
        </label>

        <label>
          Last Name*
          <input
            type="text"
            onChange={this.updateField("lastName")}
            value={this.state.user.lastName}
            required
          />
        </label>

        <label>
          Preferred Pronouns
          <input
            type="text"
            onChange={this.updateField("pronouns")}
            value={this.state.user.pronouns}
          />
        </label>

        <button onClick={this.updateFormNum} value={PREVIOUS}>Previous</button>
        <button onClick={this.updateFormNum} value={NEXT}>Next</button>
      </form>
    );
  }

  currentLocationForm() {
    return (
      <form>
        <h1>Where are you currently located?</h1>
        <label>
          City/State*
          <input
            type="text"
            onChange={this.updateField("currentLocation")}
            value={this.state.user.currentLocation}
            required
          />
        </label>

        <button onClick={this.updateFormNum} value={PREVIOUS}>Previous</button>
        <button onClick={this.updateFormNum} value={NEXT}>Next</button>
      </form>
    );
  }

  headlineForm() {
    return (
      <form>
        <h1>Your profile helps you discover new people and opportunities</h1>
        <label>
          Most recent job title*
          <input
            type="text"
            onChange={this.updateField("headline")}
            value={this.state.user.headline}
            required
          />
        </label>

        <button onClick={this.updateFormNum} value={PREVIOUS}>Previous</button>
        <button onClick={this.updateFormNum} value={NEXT}>Next</button>
      </form>
    );
  }

  profilePictureForm() {
    let preview = this.state.photoUrl ? (
      <img src={this.state.photoUrl} />
    ) : null;

    return (
      <form>
        <div className="header">
          {preview ? <h2>Profile picture preview</h2> : null}
        </div>

        <div className="image-preview">{preview}</div>

        <input type="file" onChange={this.handleFile} accept="image/*" />

        <button onClick={this.updateFormNum} value={PREVIOUS}>
          Previous
        </button>
        <button onClick={this.updateFormNum} value={NEXT}>
          Next
        </button>
      </form>
    );
  }

  aboutForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Tell us a little bit about yourself</h1>
        <input
          type="text"
          onChange={this.updateField("about")}
          value={this.state.user.about}
        />

        <button onClick={this.updateFormNum} value={PREVIOUS}>Previous</button>
        <input type="submit" value={this.props.formType} />

        <div className="form-errors">
          {this.displayErrors()}
        </div>
      </form>
    );
  }
};