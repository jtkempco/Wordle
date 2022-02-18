import React, { Component } from "react";

class KeyboardKey extends Component {
  constructor(props) {
    super(props);
    this.handelClick = this.handelClick.bind(this);
    this.state = { state: "default" };
  }

  handelClick(value) {
    alert(value + ": CLICKED");
  }

  render() {
    const keyValue = this.props.dataKey.toUpperCase();

    return (
      <div class="Keyboard__key" onClick={() => this.handelClick(keyValue)}>
        {keyValue}
      </div>
    );
  }
}

export default KeyboardKey;
