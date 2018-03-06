import React, { Component } from "react";
import Axios from "axios";

const API_KEY = "50093249883d485893ad7ccb840c9738";

class CompetitionTeams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamList: ""
    };
    this.retrieveTeamsForCompetition(props.competitionSelected.id);
  }

  componentWillReceiveProps(nextProps) {
    this.retrieveTeamsForCompetition(nextProps.competitionSelected.id);
  }
  
  retrieveTeamsForCompetition = competId => {
    var config = {
      headers: {
        "X-Auth-Token": API_KEY
      }
    };

    const url = `http://api.football-data.org/v1/competitions/${competId}/teams`;

    var config = {
      headers: {
        "X-Auth-Token": API_KEY
      }
    };

    Axios.get(url, config)
      .then(response => {
        this.setState({
          teamsList: response.data.teams.map(team => {
            return (
              <li key={team.code} className="list-group-item">
                <div className="team-list media">
                  <div className="media-left">{team.name}</div>
                </div>
              </li>
            );
          })
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  render() {
    if (!this.state.teamsList) {
      return <div>Loading...</div>;
    }
    return <ul className="col-md-4 list-group">{this.state.teamsList}</ul>;
  }
}

export default CompetitionTeams;
