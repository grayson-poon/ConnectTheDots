import React from "react";

export const firstLastNameAndPronouns = () => {
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
};
