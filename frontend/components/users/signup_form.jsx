import React from "react";
import { Link } from "react-router-dom";

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (event) => this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props
      .createUser(this.state)
      .then(() => this.props.history.push(this.props.feedUrl));
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

  render() {
    let url = this.props.match.path;
    let urlNum = parseInt(url[url.length - 1]);

    switch (urlNum) {
      case 1:
        return this.emailPasswordForm();
      case 2:
        return this.namePronounsForm();
      case 3:
        return this.currentLocationForm();
      case 4:
        return this.headlineForm();
      case 5:
        return this.aboutForm();
      default:
        return <div>Form does not exist</div>;
    }
  }

  emailPasswordForm() {
    return (
      <form>
        <label>
          Email*
          <input
            type="text"
            onChange={this.update("email")}
            value={this.state.email}
            required
          />
        </label>

        <label>
          Password*
          <input
            type="password"
            onChange={this.update("password")}
            value={this.state.password}
            required
          />
        </label>

        <Link to="/signup2">Next</Link>
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
            onChange={this.update("firstName")}
            value={this.state.firstName}
            required
          />
        </label>

        <label>
          Last Name*
          <input
            type="text"
            onChange={this.update("lastName")}
            value={this.state.lastName}
            required
          />
        </label>

        <label>
          Preferred Pronouns
          <input
            type="text"
            onChange={this.update("pronouns")}
            value={this.state.pronouns}
          />
        </label>

        <Link to="/signup1">Back</Link>
        <Link to="/signup3">Next</Link>
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
            onChange={this.update("currentLocation")}
            value={this.state.currentLocation}
            required
          />
        </label>

        <Link to="/signup2">Back</Link>
        <Link to="/signup4">Next</Link>
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
            onChange={this.update("headline")}
            value={this.state.headline}
            required
          />
        </label>

        <Link to="/signup3">Back</Link>
        <Link to="/signup5">Next</Link>
      </form>
    );
  }

  aboutForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Tell us a little bit about yourself</h1>
        <input
          type="text"
          onChange={this.update("about")}
          value={this.state.about}
        />

        <Link to="/signup4">Back</Link>
        <input type="submit" value={this.props.formType} />
      </form>
    );
  }
};