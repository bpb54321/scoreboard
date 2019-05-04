const React = window.React;
const ReactDOM = window.ReactDOM;

let Counter = () => {
  return (
    <div className={"counter"}>
      <button className={"counter-action decrement"}>-</button>
      <span className={"counter-score"}>0</span>
      <button className={"counter-action increment"}>+</button>
    </div>
  );
};

let Player = () => {
  return (
    <div className={"player"}>
      <span className={"player-name"}>
        Brian
      </span>
      <Counter/>
    </div>
  );
};

let App = () => {
  return (
    <div className={"scoreboard"}>
      <Player/>
      <Player/>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
