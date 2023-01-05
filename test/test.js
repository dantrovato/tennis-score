const assert = require("assert");
const { Game } = require("../app.js");

describe("Game", function () {
  describe("#pointTo()", function () {
    it("should throw error player b doesn't exist", function () {
      const game = new Game("d", "c");

      assert.throws(() => {
        game.pointTo("b");
      }, /player b doesn't exist/);
    });

    it("should throw error player toString doesn't exist", function () {
      const game = new Game("d", "c");

      assert.throws(() => {
        game.pointTo("toString");
      }, /player toString doesn't exist/);
    });
  });

  describe("#score()", function () {
    it("should return d: 15, c: 0", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      assert.equal(game.score(), "d: 15, c: 0");
    });

    it("should return d: 40, c: 30", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("c");
      assert.equal(game.score(), "d: 40, c: 30");
    });

    it("should return deauce", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("d");
      assert.equal(game.score(), "deauce");
    });

    it("should return advantage c", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      assert.equal(game.score(), "advantage c");
    });

    it("should return advantage d", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("d");
      assert.equal(game.score(), "advantage d");
    });

    it("should return game d", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("d");
      assert.equal(game.score(), "game d");
    });

    it("should return game c", function () {
      const game = new Game("d", "c");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("d");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      game.pointTo("c");
      assert.equal(game.score(), "game c");
    });

    it("should return game c", function () {
      const game = new Game("d", "c");
      game.pointTo("c"); // 0 15
      game.pointTo("c"); // 0 30
      game.pointTo("c"); // 0 40
      game.pointTo("c"); // game c
      game.pointTo("c");
      assert.equal(game.score(), "game c");
    });
  });
});
