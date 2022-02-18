import React, { Component } from "react";
import KeyboardKey from "./KeyboardKey";

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = { letters: "" };
  }

  render() {
    //const letters = this.props.letters;

    return (
      <React.Fragment>
        <div class="row">
          <KeyboardKey dataKey="q" />
          <KeyboardKey dataKey="w" />
          <KeyboardKey dataKey="e" />
          <KeyboardKey dataKey="r" />
          <KeyboardKey dataKey="t" />
          <KeyboardKey dataKey="y" />
          <KeyboardKey dataKey="u" />
          <KeyboardKey dataKey="i" />
          <KeyboardKey dataKey="o" />
          <KeyboardKey dataKey="p" />
        </div>
        <div class="row">
          <KeyboardKey dataKey="a" />
          <KeyboardKey dataKey="s" />
          <KeyboardKey dataKey="d" />
          <KeyboardKey dataKey="f" />
          <KeyboardKey dataKey="g" />
          <KeyboardKey dataKey="h" />
          <KeyboardKey dataKey="j" />
          <KeyboardKey dataKey="k" />
          <KeyboardKey dataKey="l" />
        </div>
        <div class="row">
          <KeyboardKey dataKey="↵" />
          <KeyboardKey dataKey="z" />
          <KeyboardKey dataKey="x" />
          <KeyboardKey dataKey="c" />
          <KeyboardKey dataKey="v" />
          <KeyboardKey dataKey="b" />
          <KeyboardKey dataKey="n" />
          <KeyboardKey dataKey="m" />
          <KeyboardKey dataKey="←" />
        </div>
      </React.Fragment>
    );
  }
}

export default Keyboard;
