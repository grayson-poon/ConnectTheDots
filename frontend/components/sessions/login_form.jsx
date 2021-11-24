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
  
   let promise = (event.target.value === "Demo User") ? (
      this.props.login(this.props.demoUser)
    ) : (
      this.props.login(this.state)
    );
    
    this.setState({ email: "", password: "" });
    promise.then(() => this.props.history.push(FEED));
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
      <div className="login-form">

        <div className="login-form-header">
          <div>Sign in</div>
          <div>Stay updated on your professional world</div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="email">
            <input
              type="text"
              onChange={this.update("email")}
              value={this.state.email}
              placeholder="Email"
            />
          </div>

          <div className="password">
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
          <div>New to ConnectTheDots?</div>
          <Link to={SIGNUP_FORM}>Join now</Link>
        </div>
      </div>
    );
  }
}