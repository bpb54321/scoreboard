import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <span className={"stats"}>Players: {this.props.numberOfPlayers}</span>
      </header>
    );
  }
}

export default Header;
