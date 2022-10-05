function Game(player1, player2) {
  this.player1 = { name: player1, score: 0 };
  this.player2 = { name: player2, score: 0 };

  // make private function to return array with passed player as index 0 and second player at index 1
  const playersArray = (player) => {
    if (player === this.player1.name) {
      return [this.player1, this.player2];
    }
    if (player === this.player2.name) {
      return [this.player2, this.player1];
    } else {
      return "Player is off today";
    }
  };

  this.pointTo = function (player) {
    const [server, receiver] = playersArray(player);
    if (server.score < 30) {
      server.score += 15;
    } else if (server.score === 30) {
      server.score += 10;
    } else if (server.score === 40) {
      if (receiver.score < 40) {
        server.score = `${player.name} wins`;
      } else if (receiver.score === 40) {
        server.score = "advantage";
      }
    } else if (server.score === "advantage" && receiver.score === "deauce") {
      server.score = `${player.name} wins`;
    } else if (server.score === "deauce") {
      server.score = "advantage";
    }
  };

  this.score = function () {
    if (this.player1.score === 40 && this.player2.score === 40) {
      return "players are deauce";
    }
    return `${this.player1.name}'s score is ${this.player1.score}. ${this.player2.name}'s score is ${this.player2.score}`;
  };
}

module.exports = { Game };
