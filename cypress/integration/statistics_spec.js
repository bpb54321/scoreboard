describe('Statistics component', function() {
  it('Is present in the scoreboard', function() {
    cy.get('[data-testid="statistics"]');
  });

  it('Displays the total number players', function() {

    // Given the statistics component is present
    cy.get('[data-testid="statistics"]').as('statistics');

    // And it has the player count element
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
});
