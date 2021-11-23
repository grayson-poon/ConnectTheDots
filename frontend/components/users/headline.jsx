import React from "react";

export const headline = () => {
  return (
    <form onSubmit={this.nextForm("headline")}>
      <h1>Your profile helps you discover new people and opportunities</h1>
      <label>
        Most recent job title*
        <input
          type="text"
          onChange={this.update("headline")}
          value={this.state.headline}
          required
        />
      </label>

      <input type="submit" value="Next" />
    </form>
  );
};
