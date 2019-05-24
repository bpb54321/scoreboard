import React from 'react';

export default class NewPlayerForm extends React.Component {
  render() {
    return (
      <form data-testid="new-player-form">
        <input type={"text"} data-testid="player-name"/>
        <button data-testid="add-new-player-button">Add Player</button>
      </form>
    );
  }
}
