import React, { Component } from "react";
import "../assets/Clock.css";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 500);
  }

  render() {
    return <div className="clock">{this.state.date.toLocaleString()}</div>;
  }
}

export default Clock;
