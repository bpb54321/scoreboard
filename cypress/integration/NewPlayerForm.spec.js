describe('NewPlayerForm', function() {
  it('Has a button for adding a new player', function() {
    cy.get('[data-testid="new-player-form"]').as('new-player-form');

    cy.get('@new-player-form')
      .find('[data-testid="add-new-player-button"]');
  });
});
