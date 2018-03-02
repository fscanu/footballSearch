import React, { Component } from "react";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { competId: "" };
  }

  onInputChange(competId) {
    this.setState({ competId });
    this.props.onSearchTermChange(competId);
  }

  render() {
    return (
      <div className="searchBar">
        <input
          value={this.state.competId}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
