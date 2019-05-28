import React from 'react';

import Counter from "./Counter";

import '../scss/_player.scss';

export default class Player extends React.Component {

  render() {
    return (
      <div
        className={"player"}
        data-testid="player"
      >

        <span className={"player-name-container"}>
          <button
            className={"remove-player"}
            onClick={() => this.props.removePlayer(this.props.id) }
          >✖</button>
          <span
            data-testid="player-name"
            className={"player-name"}
          >
            {this.props.name}
          </span>
        </span>
        <Counter
          changePlayerScoreAndUpdateTotalPoints={this.props.changePlayerScoreAndUpdateTotalPoints}
          playerId={this.props.id}
          score={this.props.score}
        />
      </div>
    );
  }

}
