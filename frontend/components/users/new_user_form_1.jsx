import React from "react";
import { emailAndPassword } from "./email_and_password";
import { firstLastNameAndPronouns } from "./first_last_name_and_pronouns";;
import { currentLocation } from "./current_location";
import { headline } from "./headline";
import { about } from "./about";

export default class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.formComponents = [
      this.emailAndPassword,
      this.firstLastNameAndPronouns,
      this.currentLocation,
      this.headline,
      this.about,
    ];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextForm = this.nextForm.bind(this);
  }

  render() {
    if (this.nextForm() === undefined) {
      return (
        <div>

        </div>
      )
    } else {
      <div>{this.nextForm()}</div>;
    }

    // this.nextForm ? (
    //   <div>{this.nextForm()}</div>
    // ) : (
    //   <div>
    //     LOADING...
    //   </div>
    // )
  }

  update(field) {
    return (event) => this.setState({ [field]: event.target.value });
  }

  nextForm() {
    let nextComponent = this.formComponents.shift();
    let nextPart = nextComponent();
    return nextPart;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createUser(this.state); // instead of create user, save to store, then render create profile form
    this.setState({
      password: "",
    });
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

  emailAndPassword() {
    return (
      <form onSubmit={this.nextForm}>
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

        <input type="submit" value="Next" />
      </form>
    );
  }

  firstLastNameAndPronouns() {
    return (
      <form onSubmit={this.nextForm}>
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

        <input type="submit" value="Next" />
      </form>
    );
  }
};