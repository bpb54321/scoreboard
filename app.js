const React = window.React;
const ReactDOM = window.ReactDOM;

let Counter = () => {
  return (
    <div>
      <button>Decrement</button>
      <span>0</span>
      <button>Increment</button>
    </div>
  );
};

let Player = () => {
  return (
    <div>
      <span>Brian</span>
      <Counter/>
    </div>
  );
};

let Scoreboard = () => {
  return (
    <div>
      <Player/>
      <Player/>
    </div>
  );
};

ReactDOM.render(
  <Scoreboard/>,
  document.getElementById('root')
);
