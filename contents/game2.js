const goToNextRoom = require("../inquirer");

class Game {
  constructor(gameName) {
    this.gameName = gameName;
    this.playername = "unknown player";
    this.attributes = [];
    this.inventory = [];
  }
  changePlayername(name) {
    this.playername = name;
  }
  learn(skill) {
    if (this.attributes.includes(skill)) {
      console.log(`You have already learnt ${skill}`);
      return null;
    }
      this.attributes.push(skill);
  }
  pickUpItem(item) {
    if (this.inventory.includes(item)) {
      console.log(`You already have the ${item}`);
      return null;
    }
    this.inventory.push(item);
  }
  resetGame() {
    this.playername = "unknown player";
    this.attributes = [];
    this.inventory = [];
  }
}

Game.prototype.startGame = function() {
  goToNextRoom(this);
};

module.exports = Game;
