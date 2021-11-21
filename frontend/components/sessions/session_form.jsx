import React from "react";

export default class SessionForm extends React.Component {
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
    this.props.login(this.state);
  }

  render() {
    let { formtype } = this.props;

    return (
      <form onSubmit={() => this.handleSubmit}>
        <label>
          Email
          <input type="text" onChange={this.update("email")} value={this.state.email} />
        </label>

        <label>
          Password
          <input type="password" onChange={this.update("password")} value={this.state.password} />
        </label>

        <input type="submit" value={formtype} />
      </form>
    )
  }
}