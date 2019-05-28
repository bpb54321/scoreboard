import React from 'react';

import '../scss/_statistics.scss';

export default class Statistics extends React.Component {
  render() {
    return (
      <div data-testid="statistics"
      >
        <div>
          <span data-testid="player-count-label"></span>
          <span data-testid="player-count">3</span>
        </div>
        <div>
          <span data-testid="total-points-label">TOTAL POINTS: </span>
          <span data-testid="total-points">
            {this.props.totalPoints}
          </span>
        </div>
      </div>
    );
  }
}
