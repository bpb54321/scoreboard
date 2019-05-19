import React from 'react';
import Statistics from "./Statistics";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Statistics/>
        <h1>{this.props.title}</h1>
        <span className={"stats"}>Players: {this.props.numberOfPlayers}</span>
      </header>
    );
  }
}

export default Header;
