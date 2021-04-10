const { expect } = require("chai");
const Game = require("../contents/game2");

describe.only("GAME system", () => {
    it('game is given chosen name', () => {
        const test = new Game('a');
        expect(test.gameName).to.equal('a')
    });
    it('player has default name', () => {
        const test = new Game('a');
        expect(test.playername).to.equal('unknown player')
    });
    it('player can change name', () => {
        const test = new Game('a');
        test.changePlayername('a')
        expect(test.gameName).to.equal('a')
    });
    it('can learn a skill', () => {
        const test = new Game('a');
        test.learn('javascript')
        expect(test.attributes).to.eql(['javascript'])
    });
    it('can pick up items', () => {
        const test = new Game('a');
        test.pickUpItem('a')
        expect(test.inventory).to.eql(['a'])
    });
    it('reset game back to default', () => {
        const test = new Game('a');
        const test2 = new Game('a');
        test.changePlayername('a');
        test.learn('a');
        test.pickUpItem('a');
        test.resetGame();
        expect(test).to.eql(test2)
    });
});