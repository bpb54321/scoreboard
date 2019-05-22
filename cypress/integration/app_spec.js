describe('Application (scoreboard)', function() {
  it('Has a form for adding a new player', function() {

    cy.get('[data-testid="scoreboard"]').as('scoreboard');

    cy.get('@scoreboard')
      .find('[data-testid="add-new-player-form"]');
  });
});
