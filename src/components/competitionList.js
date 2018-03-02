import React from "react";
import CompetitionListItem from "./competitionListItem";

const CompetitionList = props => {
  const competitions = props.competitionList.map(competition => {
    console.log(
      "inside the iterator: props.onCompetitionSelected",
      props.onCompetitionSelected
    );

    return (
      <CompetitionListItem
        onCompetitionSelected={props.onCompetitionSelected}
        key={competition.id}
        competition={competition}
      />
    );
  });

  return <ul className="col-md-4 list-group">{competitions}</ul>;
};

export default CompetitionList;
