import React from "react";
import { Link } from "react-router-dom";
import { FEED, SIGNUP_FORM } from "../../util/url_paths_util";

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
  
    event.target.value === "Demo User"
      ? this.props.login(this.props.demoUser)
      : this.props.login(this.state)
    
    this.setState({ email: "", password: "" });
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
    return (
      <div className="login-form-page">

        <div className="login-form-header">
          <div>Sign in</div>
          <div>Stay updated on your professional world</div>
        </div>

        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="login-input-container">
            <input
              type="text"
              onChange={this.update("email")}
              value={this.state.email}
              placeholder="Email"
            />
          </div>

          <div className="login-input-container">
            <input
              type="password"
              onChange={this.update("password")}
              value={this.state.password}
              placeholder="Password"
            />
          </div>

          <div className="login-form-buttons">
            <button id="login" onClick={this.handleSubmit} value="Login">
              Login
            </button>
            <button id="demo-user" onClick={this.handleSubmit} value="Demo User">
              Demo User
            </button>
          </div>

          <div className="form-errors">{this.displayErrors()}</div>
        </form>

        <div className="login-form-join-now">
          <div id="question">New to ConnectTheDots?</div>
          <div id="link">
            <Link to={SIGNUP_FORM}>Join now</Link>
          </div>
        </div>
      </div>
    );
  }
}