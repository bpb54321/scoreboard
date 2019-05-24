import React from 'react';

import '../css/NewPlayerForm.css';

export default class NewPlayerForm extends React.Component {
  render() {
    return (
      <form data-testid="new-player-form" className="new-player-form">
        <input type={"text"} data-testid="player-name"/>
        <button data-testid="add-new-player-button"
          className={"new-player-form__add-new-player-button"}>Add Player</button>
      </form>
    );
  }
}
