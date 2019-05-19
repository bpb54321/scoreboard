describe('Statistics component', function() {
  it('Is present in the scoreboard', function() {
    cy.get('[data-testid="statistics"]');
  });

  it('Displays the total number of default players', function() {

    // Given the statistics component is present
    cy.get('[data-testid="statistics"]').as('statistics');

    // And it has the player count element
    cy.get('[data-testid="player-count"]').as('player-count');
  });
});
