function Game(server, receiver) {
  this.scores = { [server]: 0, [receiver]: 0 };

  const pointNames = { 0: "0", 1: "15", 2: "30", 3: "40" };

  function scoreDifference(serverScore, receiverScore) {
    return Math.abs(serverScore - receiverScore);
  }

  function leadPlayer() {
    return score(server) > score(receiver) ? server : receiver;
  }

  // if both scores are 3 or above and they are the same return true
  function isDeauce() {
    if (
      score(server) >= 3 &&
      score(receiver) >= 3 &&
      score(server) === score(receiver)
    ) {
      return true;
    }

    return false;
  }

  // if the difference between scores is one point and whey are both 3 or above return true
  function isAdvantage() {
    if (
      scoreDifference(score(server), score(receiver)) === 1 &&
      score(server) >= 3 &&
      score(receiver) >= 3
    ) {
      return true;
    }
    return false;
  }

  // get the score of the player passed in
  const score = (playerName) => {
    return this.scores[playerName]; // ex: 2, this is an integer
  };

  // if the difference between scores is more than one point and at least one of them is greater than 3 return true
  function isGameOver() {
    if (
      scoreDifference(score(server), score(receiver)) > 1 &&
      (score(server) > 3 || score(receiver) > 3)
    )
      return true;
  }

  // increment the score referenced by playerName in the this.scores object
  this.pointTo = function (playerName) {
    this.scores[playerName] += 1;
  };

  this.score = function () {
    if (isDeauce()) return "deauce";

    if (isAdvantage()) return `advantage ${leadPlayer()}`;

    if (isGameOver()) {
      return `game ${leadPlayer()}`;
    }

    // return score in the form of ex. d: 40, c: 30 if the above conditions don't run
    return `${server}: ${pointNames[this.scores[server]]}, ${receiver}: ${
      pointNames[this.scores[receiver]]
    }`;
  };
}

module.exports = { Game };

// make an array of scores and sort it
