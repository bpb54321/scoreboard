import React from 'react';

import '../scss/_new-player-form.scss';

export default class NewPlayerForm extends React.Component {

  state = {
    newPlayerName: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addPlayer(this.state.newPlayerName);
    this.setState({
      newPlayerName: '',
    });
  };

  handleTextInputChange = (event) => {
    this.setState({
      newPlayerName: event.target.value,
    });
  };

  render() {
    return (
      <form
        data-testid="new-player-form"
        className="new-player-form"
        onSubmit={this.handleSubmit}
      >
        <input
          type={"text"}
          data-testid="player-name"
          onChange={this.handleTextInputChange}
          value={this.state.newPlayerName}
        />
        <button
          data-testid="add-new-player-button"
          className={"new-player-form__add-new-player-button"}
          type={"submit"}
        >
          Add Player
        </button>
      </form>
    );
  }
}
