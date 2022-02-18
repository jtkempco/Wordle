import React, { Component } from "react";
import GameTile from "./GameTile";

class GameRow extends Component {
  constructor(props) {
    super(props);
    this.state = { letters: "" };
  }

  render() {
    //const letters = this.props.letters;

    return (
      <div class="row">
        <GameTile letter="" />
        <GameTile letter="" />
        <GameTile letter="" />
        <GameTile letter="" />
        <GameTile letter="" />
      </div>
    );
  }
}

export default GameRow;
