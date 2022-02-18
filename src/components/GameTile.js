import React, { Component } from "react";

class GameTile extends Component {
  constructor(props) {
    super(props);
    this.state = { letters: "" };
  }

  render() {
    return <div className="tile">{this.props.letter}</div>;
  }
}

export default GameTile;
