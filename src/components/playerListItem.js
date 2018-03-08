import React from "react";

const PlayerListItem = ({ player }) => {
  return (
    <li className="list-group-item">
      <div className="player-list media">
        <div className="media-left">{player.name}</div>
      </div>
    </li>
  );
};

export default PlayerListItem;
