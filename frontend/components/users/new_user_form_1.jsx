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

  nextForm() {

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

  

  firstLastNameAndPronouns() {

  }

  location() {

  }

  headline() {

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
};