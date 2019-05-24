describe('Statistics component', function() {

  beforeEach(function() {

    // Get the wrapper element for this component
    cy.get('[data-testid="statistics"]').as('statistics');

  });

  it('Displays the total number of players', function() {

    // Given it has the player count element
    cy.get('@statistics')
      .find('[data-testid="player-count"]')
      .as('player-count');

    // Then the player count should be equal to the total number of Player elements on the page
    cy.get('.player').then(($player) => {
      let numberOfPlayers = $player.length;

      console.log(`numberOfPlayers: ${numberOfPlayers}`);

      cy.get('@player-count')
        .should('have.text', numberOfPlayers + '');
    });
  });

  it('displays the total score of all the players', function () {
    // Given it has the total score element
    cy.get('@statistics')
      .find('[data-testid="total-score"]')
      .as('total-score');
  });
});
