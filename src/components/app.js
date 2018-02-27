// import logo from "./logo.svg";
// import "./App.css";

import React, { Component } from "react";
import SearchBar from "./search-bar";
import Axios from "axios";

const API_KEY = "50093249883d485893ad7ccb840c9738";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { teams: [] };
    this.footballApiQuery.bind(this);
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

        // this.setState({
        //   teams: response.data.teams.map(team => {
        //     return (
        //       <li shortname={team.shortname} key={team.code} name={team.name} />
        //     );
        //   })
        // });
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">FootballPlayerSearch</h1>
        </header>
        <SearchBar onSearchTermChange={this.footballApiQuery} />
        {this.state.teams}
      </div>
    );
  }
}
