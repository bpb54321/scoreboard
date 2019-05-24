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

  it('displays the total points of all the players', function () {
    // Given it has the total points element
    cy.get('@statistics')
      .find('[data-testid="total-points"]')
      .as('total-points');

    // And the total points element has a label which reads "TOTAL POINTS: "
    cy.get('@statistics')
      .find('[data-testid="total-points-label"]')
      .should('have.text', 'TOTAL POINTS: ');

    // Then the total points should display the sum of the initial points of all the intial
    // players
    cy.get('.counter-score').then(function ($counterScores) {
      let totalScore = 0;
      $counterScores.each(function (index, element) {
        let $element = Cypress.$(element);
        let counterScore = parseInt($element.text());
        totalScore += counterScore;
      });

      cy.get('@total-points')
        .should('have.text', totalScore + '');
    });

  });
});
