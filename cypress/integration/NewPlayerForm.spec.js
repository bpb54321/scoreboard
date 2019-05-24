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

  it('The add new player button has certain styles', function() {
    cy.get('@new-player-form')
      .find('[data-testid="add-new-player-button"]')
      .should('have.css', 'font-family', 'Arial, sans-serif')
      .should('have.css', 'background-color', 'rgb(68, 51, 141)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('have.css', 'font-size', '9.6px');
  });

  it('The add new player button\'s font-size doubles when the root font' +
    ' size doubles', function () {

    cy.get('html').then(function ($html) {
      $html.css('font-size', '32px');
      debugger;
    });

    cy.get('@new-player-form')
      .find('[data-testid="add-new-player-button"]')
      .should('have.css', 'font-size', '19.2px')
  });
});
