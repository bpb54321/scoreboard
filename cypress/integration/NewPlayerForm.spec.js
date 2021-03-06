context('NewPlayerForm', function() {

  beforeEach(function() {
    // Get the wrapper element for this component
    cy.get('[data-testid="new-player-form"]').as('new-player-form');
  });

  specify('It is an HTML form',function() {
    cy.get('@new-player-form')
      .should('match', 'form');
  });

  specify('It has a button for adding a new player', function() {
    cy.get('@new-player-form')
      .find('[data-testid="add-new-player-button"]')
      .should('match', 'button');
  });

  specify("It has a text input for adding the new player's name", function() {
    cy.get('@new-player-form')
      .find('[data-testid="player-name"]')
      .should('match', 'input[type="text"]');
  });

  specify('The add new player button has certain styles', function() {
    cy.get('@new-player-form')
      .find('[data-testid="add-new-player-button"]')
      .should('have.css', 'font-family', 'Arial, sans-serif')
      .should('have.css', 'background-color', 'rgb(68, 51, 141)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('have.css', 'font-size', '9.6px');
  });

  specify("The add new player button's font-size doubles when the root font" +
    " size doubles", function () {

    cy.get('html').then(function ($html) {
      $html.css('font-size', '32px');
    });

    cy.get('@new-player-form')
      .find('[data-testid="add-new-player-button"]')
      .should('have.css', 'font-size', '19.2px')
  });

  specify('It should be able to add a new player to the list of players', function () {

    let initialNumberOfPlayers;

    // Given I have a certain number of players in the players list
    cy.get('[data-testid="player"]').then(($players) => {
      initialNumberOfPlayers = $players.length;
    });

    // When I type "Michael" into the new player text input
    const name = "Michael";
    cy.get('@new-player-form')
      .find('[data-testid="player-name"]')
      .type(name);

    // And I click the add new player button
    cy.get('@new-player-form')
      .find('[data-testid="add-new-player-button"]')
      .click();

    // Then the player list should now have 1 more player than it had before
    cy.get('[data-testid="player"]').then(($players) => {
      expect($players.length).to.equal(initialNumberOfPlayers + 1);
    });

  });

  specify("When a new player is added, the new player's name should be the " +
    "same name that was entered in the add new player form" , function () {

    // When I add a player named "Michael"
    const name = "Michael";

    cy.addNewPlayer(name);

    // Then the last player in the player list should have the name that we entered
    cy.get('[data-testid="player"]').then(($players) => {
      let lastPlayerName = $players.last().find('[data-testid="player-name"]').text();
      expect(lastPlayerName).to.equal(name);
    });

  });

  specify("After a new player is added, the new player text input should " +
    "be cleared.", function () {

    // When I add a player named "Michael"
    const name = "Michael";

    cy.addNewPlayer(name);

    // Then the name input should be cleared
    cy.get('@new-player-form')
      .find('[data-testid="player-name"]')
      .then(($playerName) => {
        expect($playerName).to.have.value('');
      });

  });

});
