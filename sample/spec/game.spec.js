const { expect } = require("chai");
const Game = require("../contents/game");

describe("GAME system", () => {
  it("creates an new Game object with a timesPlayed value set to 0", () => {
    const newGame = new Game();
    expect(newGame.timesPlayed).to.equal(0);
  });
  it("has an incrementTimesPlayed function that increases the timesPlayed value by 1", () => {
    const newGame = new Game();
    newGame.incrementTimesPlayed();
    expect(newGame.timesPlayed).to.equal(1);
  });
});
