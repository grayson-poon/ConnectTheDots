import React from "react";

export default class NewUserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.user;
  }

  update(field) {
    return (event) => this.setState({ [field]: event.target.value });
  }

  render() {
    return (
      <form>Sign Up for ConnectTheDots!
        <label>Email
          <input
            type="text"
            onChange={this.update("email")}
            value={this.state.email}
          />
        </label>

        <label>Password
          <input 
            type="password" 
            onChange={this.update("password")}
            value={this.state.password}
          />
        </label>

        <input type="submit" value={this.props.formType} />
      </form>
    )
  }
};