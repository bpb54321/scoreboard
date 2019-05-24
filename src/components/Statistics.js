import React from 'react';

export default class Statistics extends React.Component {
  render() {
    return (
      <div data-testid="statistics"
      >
        <div>
          <span data-testid="player-count">3</span>
        </div>
        <div>
          <span data-testid="total-points-label">TOTAL POINTS: </span>
          <span data-testid="total-points">0</span>
        </div>
      </div>
    );
  }
}
