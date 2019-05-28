import React from 'react';

import '../scss/_counter.scss';

export default class Counter extends React.Component {

  render() {
    return (
      <div className={"counter"}>
        <button
          className={"counter-action decrement"}
          onClick={ () => this.props.changePlayerScoreAndUpdateTotalPoints(this.props.playerId, 'decrement') }
        >-</button>
        <span className={"counter-score"}>{this.props.score}</span>
        <button
          className={"counter-action increment"}
          data-testid="increment-button"
          onClick={ () => this.props.changePlayerScoreAndUpdateTotalPoints(this.props.playerId, 'increment') }
        >+</button>
      </div>
    );
  }
}
