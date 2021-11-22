export const emailAndPassword = () => {
  return (
    <form onSubmit={this.nextForm}>
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

      <input type="submit" value="Next" />
    </form>
  );
};