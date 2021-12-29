import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    }
  }

  updateSearch() {
    return (event) => {
      this.props.searchUsers({ searchValue: event.target.value});
      this.setState({ searchValue: event.target.value });
    }
  }

  render() {
    let { searchResults } = this.props;

    return (
      <div className="search-bar">
        <input type="text" onChange={this.updateSearch()} />
        <div className="results-index">
          <ul>
            {searchResults.length === 0 ? null : (
              searchResults.map((user, idx) => {
                return <li key={idx}>{user.firstName} {user.lastName}</li>
              })
            )}
          </ul>
        </div>
      </div>
    );
  }
}