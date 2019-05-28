import React from 'react';
import Statistics from "./Statistics";

import '../scss/_header.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Statistics
          totalPoints={this.props.totalPoints}
        />
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
