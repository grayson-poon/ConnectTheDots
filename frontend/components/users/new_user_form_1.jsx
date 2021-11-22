import React from "react";

export default class NewUserForm extends React.Component {
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
    this.props.createUser(this.state); // instead of create user, save to store, then render create profile form
    this.setState({
      password: "",
      confirmPassword: "",
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

  }

  firstAndLastName() {

  }

  location() {

  }

  headline() {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Sign Up for ConnectTheDots!
        <label>
          Email
          <input
            type="text"
            onChange={this.update("email")}
            value={this.state.email}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            onChange={this.update("password")}
            value={this.state.password}
          />
        </label>

        <input type="submit" value={this.props.formType} />
        
        <div>
          {this.displayErrors()}
        </div>
      </form>
    );
  }
};