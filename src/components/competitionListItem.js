import React from "react";

const CompetitionListItem = ({ competition, onCompetitionSelected }) => {
  return (
    <li
      onClick={() => onCompetitionSelected(competition)}
      className="list-group-item"
    >
      <div className="competition-list media">
        <div className="media-left">{competition.caption}</div>
      </div>
    </li>
  );
};

export default CompetitionListItem;
