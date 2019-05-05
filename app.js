const React = window.React;
const ReactDOM = window.ReactDOM;

let players = [
  {
    name: "Brian",
    score: 25,
    id: 1,
  },
  {
    name: "Laura",
    score: 30,
    id: 2,
  },
  {
    name: "Zippy",
    score: 35,
    id: 3,
  },
];

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
        <button className={"counter-action decrement"}>-</button>
        <span className={"counter-score"}>{this.props.score}</span>
        <button className={"counter-action increment"}>+</button>
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
          score={this.props.score}
        />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className={"scoreboard"}>
        <Header
          title={"My Scoreboard"}
          numberOfPlayers={this.props.initialPlayers.length}
        />
        {
          this.props.initialPlayers.map(
            (player) => {
              return (
                <Player
                  name={player.name}
                  score={player.score}
                  key={player.id.toString()}
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
  <App
    initialPlayers={players}
  />,
  document.getElementById('root')
);
