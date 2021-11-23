import React from "react";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return (event) => this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  
   let promise = (event.target.value === "Demo User") ? (
      this.props.login(this.props.demoUser)
    ) : (
      this.props.login(this.state)
    );
    
    this.setState({ email: "", password: "" });
    promise.then(() => this.props.history.push(this.props.feedUrl));
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
    let { formtype } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
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

        <button onClick={this.handleSubmit} value="Login">Login</button>
        <button onClick={this.handleSubmit} value="Demo User">Demo User</button>

        <div className="form-errors">
          {this.displayErrors()}
        </div>
      </form>
    );
  }
}