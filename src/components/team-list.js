import React from "react";

const TeamList = props => {
  const teams = props.teams.map(team => {
    return (
      <li key={team.name} className="list-group-item">
        <div className="team-list media">
          <div className="media-left">{team.name}</div>
        </div>
      </li>
    );
  });

  return <ul className="col-md-4 list-group">{teams}</ul>;
};

export default TeamList;
