import React, { Component } from "react";
import Axios from "axios";

import PlayerListItem from "./playerListItem";
import * as Const from "./constants/constants";

class TeamPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerList: ""
    };
    if (props.teamSelected) {
      this.retrievePlayersByTeam(props.teamSelected._links.self.href);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.retrievePlayersByTeam(nextProps.teamSelected._links.self.href);
  }

  retrievePlayersByTeam = url => {
    var config = {
      headers: {
        "X-Auth-Token": Const.API_KEY
      }
    };

    Axios.get(`${url}/players`, config)
      .then(response => {
        this.setState({
          playerList: response.data.players.map(player => {
            return <PlayerListItem key={player.name} player={player} />;
          })
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  render() {
    if (!this.state.playerList) {
      return <div>Loading...</div>;
    }
    return <ul className="col-md-4 list-group">{this.state.playerList}</ul>;
  }
}

export default TeamPlayers;
