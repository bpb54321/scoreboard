describe('Application (scoreboard) component', function() {
  it('Has a button for adding a new player', function() {
    cy.get('[data-testid="add-new-player-button"]');
  });
});
