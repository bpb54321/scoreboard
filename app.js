const React = window.React;
const ReactDOM = window.ReactDOM;

const title = <h1>My First React Element!</h1>;

const description = <p>I just learned how to create a React node and render it into the DOM.</p>;

const header = React.createElement(
  'header',
  null,
  title,
  description,
);

ReactDOM.render(
  header,
  document.getElementById('root')
);
