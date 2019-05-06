const React = window.React;
const ReactDOM = window.ReactDOM;

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

class Counter extends React.Component {

  render() {
    return (
      <div className={"counter"}>
        <button
          className={"counter-action decrement"}
          onClick={ () => this.props.changePlayerScore(this.props.playerId, 'decrement') }
        >-</button>
        <span className={"counter-score"}>{this.props.score}</span>
        <button
          className={"counter-action increment"}
          onClick={ () => this.props.changePlayerScore(this.props.playerId, 'increment') }
        >+</button>
      </div>
    );
  }
}

class Player extends React.Component {

  render() {
    return (
      <div className={"player"}>
        <span className={"player-name"}>
          {this.props.name}
        </span>
        <Counter
          changePlayerScore={this.props.changePlayerScore}
          playerId={this.props.id}
          score={this.props.score}
        />
      </div>
    );
  }

}

class App extends React.Component {
  state = {
    players: [
      {
        name: "Brian",
        score: 0,
        id: 1,
      },
      {
        name: "Laura",
        score: 0,
        id: 2,
      },
      {
        name: "Zippy",
        score: 0,
        id: 3,
      },
    ],
  };


  changePlayerScore = (playerId, action) => {

    this.setState((previousState) => {

      let updatedPlayers = previousState.players.map((player) => {

        if (player.id === playerId) {
          if (action === 'increment') {
            player.score++;
          } else {
            player.score--;
          }
        }

        return player;

      });

      return {
        players: updatedPlayers
      };

    });

  };

  render() {
    return (
      <div className={"scoreboard"}>
        <Header
          title={"My Scoreboard"}
          numberOfPlayers={this.state.players.length}
        />
        {
          this.state.players.map(
            (player) => {
              return (
                <Player
                  name={player.name}
                  score={player.score}
                  key={player.id.toString()} // React's required key prop must be a string
                  id={player.id}
                  changePlayerScore={this.changePlayerScore}
                />
              );
            }
          )
        }
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
