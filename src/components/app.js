import React, { Component } from "react";
import SearchBar from "./search-bar";
import TeamList from "./teamList";
import CompetitionList from "./competitionList";
import Axios from "axios";

import Icon from "./icons/icon";
import Selection from "./icons/selection";
import { ICONS } from "../../constants/constants";

const API_KEY = "50093249883d485893ad7ccb840c9738";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      competitionList: [],
      selectedCompetition: null
    };

    this.retrieveCompetitions();
  }

  retrieveCompetitions = () => {
    const url = `http://api.football-data.org/v1/competitions/`;

    var config = {
      headers: {
        "X-Auth-Token": API_KEY
      }
    };

    Axios.get(url, config)
      .then(response => {
        this.setState({
          competitionList: response.data,
          selectedCompetition: response.data[0]
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  render() {
    if (!this.state.selectedCompetition) {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">FootballPlayerSearch</h1>
            <Icon icon="search" />
          </header>
          <div>Loading...</div>
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FootballPlayerSearch</h1>
          <Icon icon="search" />
        </header>
        <CompetitionList
          competitionList={this.state.competitionList}
          onCompetitionSelected={selectedCompetition =>
            this.setState({
              selectedCompetition
            })
          }
        />
        <TeamList competitionSelected={this.state.selectedCompetition} />
      </div>
    );
  }
}
