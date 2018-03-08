import React from "react";

const TeamListItem = ({ team, onTeamSelected }) => {
  return (
    <li onClick={() => onTeamSelected(team)} className="list-group-item">
      <div className="team-list media">
        <div className="media-left">{team.name}</div>
      </div>
    </li>
  );
};

export default TeamListItem;
