const assert = require("assert");
const app = require("../app.js");
const Game = app.Game;

describe("Game", function () {
  describe("#score()", function () {
    it("should return 15 0", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      assert.equal(game.score(), "d's score is 15. c's score is 0");
    });

    it("should return 30 0", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      assert.equal(game.score(), "d's score is 30. c's score is 0");
    });

    it("should return 40 0", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      assert.equal(game.score(), "d's score is 40. c's score is 0");
    });

    it("should return 40 15", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("d");
      assert.equal(game.score(), "d's score is 40. c's score is 15");
    });

    it("should return 40 30", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("c");
      assert.equal(game.score(), "d's score is 40. c's score is 30");
    });

    it("should return deauce", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("c");
      assert.equal(game.score(), "players are deauce");
    });

    it("should return 0 15", function () {
      const game = new Game("d", "c");
      game.pointTo("c");
      assert.equal(game.score(), "d's score is 0. c's score is 15");
    });

    it("should return 0 30", function () {
      const game = new Game("d", "c");
      game.pointTo("c");
      game.pointTo("c");
      assert.equal(game.score(), "d's score is 0. c's score is 30");
    });

    it("should return 0 40", function () {
      const game = new Game("d", "c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      assert.equal(game.score(), "d's score is 0. c's score is 40");
    });

    it("should return 15 40", function () {
      const game = new Game("d", "c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("d");
      assert.equal(game.score(), "d's score is 15. c's score is 40");
    });

    it("should return 30 40", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("d");
      assert.equal(game.score(), "d's score is 30. c's score is 40");
    });

    it("should return deauce", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      assert.equal(game.score(), "players are deauce");
    });

    it("should return advantage d", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("d");
      assert.equal(game.score(), "advantage d");
    });

    it("should return advantage c", function () {
      const game = new Game("d", "c");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("c");
      assert.equal(game.score(), "advantage c");
    });

    it("should return game d", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("d");
      assert.equal(game.score(), "game d");
    });

    it("should return game d", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      assert.equal(game.score(), "game d");
    });

    it("should return game c", function () {
      const game = new Game("d", "c");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("c");
      assert.equal(game.score(), "game c");
    });

    it("should return game c", function () {
      const game = new Game("d", "c");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      assert.equal(game.score(), "game c");
    });
  });
});
