function Game(player1, player2) {
  this.player1 = { name: player1, score: 0, win: false };
  this.player2 = { name: player2, score: 0, win: false };
  this.gameOn = true;

  // make private function to return array with passed player as index 0 and second player at index 1
  const playersArray = (player) => {
    const pl1 = this.player1;
    const pl2 = this.player2;

    // if player is incorrect return error
    if (![pl1.name, pl2.name].includes(player)) {
      return "Player is off today";
    }

    return player === pl1.name ? [pl1, pl2] : [pl2, pl1];
  };

  // private function
  const declareWinner = (player1, player2) => {
    if (player1.win) return `game ${player1.name}`;
    if (player2.win) return `game ${player2.name}`;
  };

  // private function
  const declareAdvantage = (player1, player2) => {
    if (player1.score === "advantage") return `advantage ${player1.name}`;
    if (player2.score === "advantage") return `advantage ${player2.name}`;
  };

  // private function
  const detectDeauce = (player1, player2) => {
    if (
      (player1.score === 40 && player2.score === 40) ||
      (player1.score === "deauce" && player2.score === "deauce")
    )
      return true;
  };

  this.pointTo = function (player) {
    // the argument 'player' will always be playerA
    const [playerA, playerB] = playersArray(player);
    const scoreA = playerA.score;
    const scoreB = playerB.score;
    // the points will only be added while the game is on. it stops being on when a winner is declared
    if (this.gameOn) {
      if (scoreA < 30) {
        playerA.score += 15;
      } else if (scoreA === 30) {
        playerA.score += 10;
      } else if (scoreA === 40) {
        if (scoreB < 40) {
          playerA.win = true;
          this.gameOn = false;
        } else if (scoreB === 40) {
          playerA.score = "advantage";
        }
      } else if (scoreA === "advantage" && scoreB === "deauce") {
        playerA.win = true;
        this.gameOn = false;
      } else if (scoreA === "deauce") {
        playerA.score = "advantage";
      }
    }
  };

  this.score = function () {
    const player1 = this.player1;
    const player2 = this.player2;

    if (player1.win || player2.win) return declareWinner(player1, player2);

    if (player1.score === "advantage" || player2.score === "advantage")
      return declareAdvantage(player1, player2);

    if (detectDeauce(player1, player2)) {
      return "players are deauce";
    }

    return `${player1.name}'s score is ${player1.score}. ${player2.name}'s score is ${player2.score}`;
  };
}

module.exports = { Game };
