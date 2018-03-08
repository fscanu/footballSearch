import React, { Component } from "react";
import Axios from "axios";
import TeamListItem from "./teamListItem";
import * as Const from "../../constants/constants";

class CompetitionTeams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamList: "",
      selectedTeam: null
    };
    this.retrieveTeamsForCompetition(props.competitionSelected.id);
  }

  componentWillReceiveProps(nextProps) {
    this.retrieveTeamsForCompetition(nextProps.competitionSelected.id);
  }

  retrieveTeamsForCompetition = competId => {
    var config = {
      headers: {
        "X-Auth-Token": Const.API_KEY
      }
    };

    const url = `http://api.football-data.org/v1/competitions/${competId}/teams`;

    var config = {
      headers: {
        "X-Auth-Token": Const.API_KEY
      }
    };

    Axios.get(url, config)
      .then(response => {
        this.setState({
          teamsList: response.data.teams.map(team => {
            return (
              <TeamListItem
                onTeamSelected={selectedTeam =>
                  this.setState({
                    selectedTeam
                  })
                }
                key={team.name}
                team={team}
              />
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
