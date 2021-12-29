import React from "react";
import ResultsIndexItem from "./results_index_item";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    }
    
    this.updateSearch = this.updateSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
  }

  updateSearch() {
    return (event) => {
      this.props.searchUsers({ searchValue: event.target.value});
      this.setState({ searchValue: event.target.value });
    }
  }

  render() {
    let { searchResults, currentUser } = this.props;

    return (
      <div className="search-bar">
        <input
          type="text"
          onChange={this.updateSearch()}
          placeholder="Search..."
          value={this.state.searchValue}
        />

        {this.state.searchValue.length > 0 ? (
          <div className="results-background" onClick={this.closeSearch}></div>
        ) : null}

        {searchResults.length === 0 ? null : (
          <div className="results-index">
            <ul>
              {searchResults.map((user, idx) => {
                return (
                  <ResultsIndexItem
                    key={idx}
                    user={user}
                    currentUser={currentUser}
                    closeSearch={this.closeSearch}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }

  closeSearch(event) {
    event.preventDefault();
    this.setState({ searchValue: "" });
    this.props.clearSearch();
  }
}