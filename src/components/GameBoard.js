import React, { Component } from "react";
import GameRow from "./GameRow";

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { letters: "" };
  }

  render() {
    //const letters = this.props.letters;

    return (
      <div class="row">
        <GameRow letters="" length="5" />
        <GameRow letters="" length="5" />
        <GameRow letters="" length="5" />
        <GameRow letters="" length="5" />
        <GameRow letters="" length="5" />
      </div>
    );
  }
}

export default GameBoard;
