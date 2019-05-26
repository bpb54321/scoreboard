import React from 'react';

import Counter from "./Counter";

export default class Player extends React.Component {

  render() {
    return (
      <div className={"player"}>

        <span className={"player-name"}>
          <button
            className={"remove-player"}
            onClick={() => this.props.removePlayer(this.props.id) }
          >✖</button>
          {this.props.name}
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
