import React from "react";

export const about = () => {
  return (
    <form onSubmit={this.nextForm("about")}>
      <h1>Tell us a little bit about yourself</h1>
      <input
        type="text"
        onChange={this.update("about")}
        value={this.state.about}
      />

      <input type="submit" value="Next" />
    </form>
  );
};
