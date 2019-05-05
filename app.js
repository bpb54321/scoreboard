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
        numberOfPlayers={props.initialPlayers.length}
      />
      {
        props.initialPlayers.map(
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
};

ReactDOM.render(
  <App
    initialPlayers={players}
  />,
  document.getElementById('root')
);
