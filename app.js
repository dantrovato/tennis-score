function Game(server, receiver) {
  this.scores = { [server]: 0, [receiver]: 0 };

  const pointNames = { 0: "0", 1: "15", 2: "30", 3: "40" };

  // get the score of the player passed in
  const scoreOf = (playerName) => {
    return this.scores[playerName]; // ex: 2, this is an integer
  };

  function scoreDifference() {
    return Math.abs(scoreOf(server) - scoreOf(receiver));
  }

  function leadPlayer() {
    return scoreOf(server) > scoreOf(receiver) ? server : receiver;
  }

  // if both scores are 3 or above and they are the same return true
  function isDeauce() {
    if (
      scoreOf(server) === scoreOf(receiver) &&
      scoreOf(server) >= 3 &&
      scoreOf(receiver) >= 3
    ) {
      return true;
    }

    return false;
  }

  // if the difference between scores is one point and whey are both 3 or above return true
  function isAdvantage() {
    if (
      scoreDifference() === 1 &&
      scoreOf(server) >= 3 &&
      scoreOf(receiver) >= 3
    ) {
      return true;
    }
    return false;
  }

  // if the difference between scores is more than one point and at least one of them is greater than 3 return true
  function isGameOver() {
    if (scoreDifference() > 1 && (scoreOf(server) > 3 || scoreOf(receiver) > 3))
      return true;
  }

  // increment the score referenced by playerName in the this.scores object
  this.pointTo = function (playerName) {
    if (![server, receiver].includes(playerName)) {
      // if (this.scores[playerName] === undefined) {
      // if (!this.scores.hasOwnProperty(playerName)) {
      throw new Error(`player ${playerName} doesn't exist`);
    }

    this.scores[playerName] += 1;
  };

  this.score = function () {
    if (isDeauce()) return "deauce";

    if (isAdvantage()) return `advantage ${leadPlayer()}`;

    if (isGameOver()) return `game ${leadPlayer()}`;

    // return score in the form of ex. d: 40, c: 30 if the above conditions don't run
    return `${server}: ${pointNames[scoreOf(server)]}, ${receiver}: ${
      pointNames[scoreOf(receiver)]
    }`;
  };
}

module.exports = { Game };
