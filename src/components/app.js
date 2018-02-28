import React, { Component } from "react";
import SearchBar from "./search-bar";
import TeamList from "./team-list";
import Axios from "axios";

import Icon from "./icon";
import Selection from "./selection";
import { ICONS } from "../../constants/constants";

const API_KEY = "50093249883d485893ad7ccb840c9738";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { teams: [] };
    this.footballApiQuery = this.footballApiQuery.bind(this);
  }

  footballApiQuery(keyword) {
    console.log(keyword);

    const competitionID = keyword;
    // const url = `http://api.football-data.org/v1/competitions/${competitionID}/teams`;
    const url = `http://api.football-data.org/v1/competitions/456/teams`;

    var config = {
      headers: { "X-Auth-Token": API_KEY }
    };

    Axios.get(url, config)
      .then(response => {
        console.log(response.data.teams);
        this.setState({
          teams: response.data.teams
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FootballPlayerSearch</h1>
          <Icon icon="facebook" />
        </header>
        <SearchBar onSearchTermChange={this.footballApiQuery} />
        <TeamList teams={this.state.teams} />
      </div>
    );
  }
}
