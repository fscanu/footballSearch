import React, { Component } from "react";

export default class CompetitionListItem extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.state = {};
    console.log("inside the item constructor", props.competition.id);
  }

  handleClick = () => {
    this.props.onCompetitionSelected(this.props.competition);
  };

  render() {
    return (
      <li
        onClick={this.handleClick}
        key={this.props.competition.id}
        className="list-group-item"
      >
        <div className="competition-list media">
          <div className="media-left">{this.props.competition.caption}</div>
        </div>
      </li>
    );
  }
}
