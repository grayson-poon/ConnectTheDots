export const currentLocation = () => {
  return (
    <form onSubmit={this.nextForm}>
      <h1>Where are you currently located?</h1>
      <label>
        City/State 
        <input
          type="text"
          onChange={this.update("currentLocation")}
          value={this.state.currentLocation}
        />
      </label>

      <input type="submit" value="Next" />
    </form>
  );
}