describe('NewPlayerForm', function() {

  beforeEach(function() {
    // Get the wrapper element for this component
    cy.get('[data-testid="new-player-form"]').as('new-player-form');
  });

  it('Is an HTML form',function() {
    cy.get('@new-player-form')
      .should('match', 'form');
  });

  it('Has a button for adding a new player', function() {
    cy.get('@new-player-form')
      .find('[data-testid="add-new-player-button"]')
      .should('match', 'button');
  });

  it('Has a text input for adding the new player\'s name', function() {
    cy.get('@new-player-form')
      .find('[data-testid="player-name"]')
      .should('match', 'input[type="text"]');
  });
});
