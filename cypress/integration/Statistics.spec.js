describe('Statistics component', function() {

  beforeEach(function() {

    // Get the wrapper element for this component
    cy.get('[data-testid="statistics"]').as('statistics');

  });

  it('displays the total number of players', function() {

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

  it('accurately displays the total points of all the players ' +
    'upon initialization', function () {
    // Given it has the total points element
    cy.get('@statistics')
      .find('[data-testid="total-points"]')
      .as('total-points');

    // And the total points element has a label which reads "TOTAL POINTS: "
    cy.get('@statistics')
      .find('[data-testid="total-points-label"]')
      .should('have.text', 'TOTAL POINTS: ');

    // Then the total points should initially display 0
    cy.get('@total-points')
      .should('have.text', '0');

  });

  it.only("should display 3 after the first player's score is increased " +
    "to 2 and the second player's score is increased to 1", async function () {

    // When I click twice on the increment score button of the first player and I click
    // once on the increment score button of the second player
    cy.get('.player').then(function ($players) {
      $players.each((index, element) => {
        if (index <= 1) {
          let incrementButton = Cypress.$(element).find('[data-testid="increment-button"]');
          switch (index) {
            case 0:
              incrementButton
                .trigger('click')
                .trigger('click');
              break;
            case 1:
              incrementButton
                .trigger('click');
              break;
          }
        }
      });
    });

    // cy.get('.counter-score').then(function ($counterScores) {
    //   let totalScore = 0;
    //   $counterScores.each(function (index, element) {
    //     let $element = Cypr (ess.$(element);
    //     let counterScore = parseInt($element.text());
    //     totalScore += counterScore;
    //   });
    //
    //   cy.get('@total-points')
    //     .should('have.text', totalScore + '');
    // });
  });
});
