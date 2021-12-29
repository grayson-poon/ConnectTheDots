import { connect } from "react-redux";
import { searchUsers } from "../../actions/search_actions";
import SearchBar from "./search_bar";

const mSTP = (state) => {
  return {
    searchResults: state.entities.searchResults
  };
};

const mDTP = (dispatch) => {
  return {
    searchUsers: (string) => dispatch(searchUsers(string)),
  };
};

export default connect(mSTP, mDTP)(SearchBar);