const React = window.React;
const ReactDOM = window.ReactDOM;

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

let App = () => {
  return (
    <div className={"scoreboard"}>
      <Header
        title={"My Scoreboard"}
        numberOfPlayers={2}
      />
      <Player
        name={"Brian"}
        score={5}
      />
      <Player
        name={"Laura"}
        score={6}
      />
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
