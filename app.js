const React = window.React;
const ReactDOM = window.ReactDOM;

function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className={"stats"}>Players: 1</span>
    </header>
  );
}

ReactDOM.render(
  <Header/>,
  document.getElementById('root')
);
