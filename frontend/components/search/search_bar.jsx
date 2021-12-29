import React from "react";
import ResultsIndexItem from "./results_index_item";

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
    let { searchResults, currentUser } = this.props;

    return (
      <div className="search-bar">
        <input type="text" onChange={this.updateSearch()} />
        <div className="results-index">
          <ul>
            {searchResults.length === 0 ? null : (
              searchResults.map((user, idx) => {
                return <ResultsIndexItem 
                  key={idx} 
                  user={user}
                  currentUser={currentUser}
                />
              })
            )}
          </ul>
        </div>
      </div>
    );
  }
}