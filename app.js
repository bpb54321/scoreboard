const React = window.React;
const ReactDOM = window.ReactDOM;
let players = [
  {
    name: "Brian",
    score: 25,
  },
  {
    name: "Laura",
    score: 30,
  },
  {
    name: "Zippy",
    score: 35,
  },
];

let Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className={"stats"}>Players: {props.numberOfPlayers}</span>
    </header>
  );
};

let Counter = (props) => {
  return (
    <div className={"counter"}>
      <button className={"counter-action decrement"}>-</button>
      <span className={"counter-score"}>{props.score}</span>
      <button className={"counter-action increment"}>+</button>
    </div>
  );
};

let Player = (props) => {
  return (
    <div className={"player"}>
      <span className={"player-name"}>
        {props.name}
      </span>
      <Counter
        score={props.score}
      />
    </div>
  );
};

let App = (props) => {
  return (
    <div className={"scoreboard"}>
      <Header
        title={"My Scoreboard"}
        numberOfPlayers={2}
      />
      {
        props.initialPlayers.map(
          (player) => {
            return (
              <Player
                name={player.name}
                score={player.score}
              />
            );
          }
        )
      }
    </div>
  );
};

ReactDOM.render(
  <App
    initialPlayers={players}
  />,
  document.getElementById('root')
);
