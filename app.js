const React = window.React;
const ReactDOM = window.ReactDOM;

const name = "Brian";

const description = "I just learned how to create a React node and render it into the DOM.";

const headerId = "my-header";

let header = (
  <header id={headerId}>
    <h1>{name}'s First React Element</h1>
    <p>{description}</p>
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);
