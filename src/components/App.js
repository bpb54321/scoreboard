import React from 'react';

import Header from './Header';
import Player from './Player';
import NewPlayerForm from "./NewPlayerForm";

export default class App extends React.Component {
  state = {
    players: [
      {
        name: "Brian",
        score: 0,
        id: 0,
      },
      {
        name: "Laura",
        score: 0,
        id: 1,
      },
      {
        name: "Zippy",
        score: 0,
        id: 2,
      },
    ],
    totalPoints: 0,
    lastIdUsed: 2,
  };

  changePlayerScoreAndUpdateTotalPoints = (playerId, action) => {

    this.setState((previousState) => {

      let totalPoints = previousState.totalPoints;

      let updatedPlayers = previousState.players.map((player) => {

        if (player.id === playerId) {
          if (action === 'increment') {
            player.score++;
            totalPoints++;
          } else {
            player.score--;
            totalPoints--;
          }
        }

        return player;

      });

      return {
        players: updatedPlayers,
        totalPoints: totalPoints,
      };

    });

  };

  removePlayer = (playerId) => {

    this.setState((previousState) => {

      let updatedPlayers = previousState.players.filter((player) => {
        return player.id !== playerId;
      });

      return {
        players: updatedPlayers,
      };

    });

  };

  addPlayer = (playerName) => {
    this.setState((previousState) => {

      let newId = previousState.lastIdUsed + 1;

      let newPlayers = previousState.players.concat({
        name: playerName,
        score: 0,
        id: newId,
      });

      return {
        players: newPlayers,
        lastIdUsed: newId,
      };

    });
  };

  render() {
    return (
      <div className={"scoreboard"} data-testid="scoreboard">
        <Header
          title={"My Scoreboard"}
          numberOfPlayers={this.state.players.length}
          totalPoints={this.state.totalPoints}
        />
        {this.state.players.map((player) => {
          return (
            <Player
              name={player.name}
              score={player.score}
              key={player.id.toString()} // React's required key prop must be a string
              id={player.id}
              changePlayerScoreAndUpdateTotalPoints={this.changePlayerScoreAndUpdateTotalPoints}
              removePlayer={this.removePlayer}
            />
          );
        })}
        <NewPlayerForm
          addPlayer={this.addPlayer}
        />
      </div>
    );
  }
}

