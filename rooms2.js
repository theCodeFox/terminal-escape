function getRooms(game) {
  return {
    startGame: {
      message: `You feel a sharp pain at the back of the head and wake up in a strange place. \n Welcome to the ${
        game.gameName
      }! Can you escape?`,
      invoke: function() {
        game.resetGame();
      },
      choices: [
        {
          text: "Look around",
          targetRoomName: "mainRoom"
        },
        {
          text: "Try the door",
          invoke: () =>
            console.log("\x1b[31m", `\n Unfortunately that door is locked. \n`),
          targetRoomName: "mainRoom"
        },
        {
          text: "Sit down and cry",
          invoke: () =>
            console.log("\x1b[31m", `\n Doesnt really help matters \n`),
          targetRoomName: "startGame"
        }
      ]
    },
    mainRoom: {
      message: `You look around and see an abandoned classroom. The windows are boarded up, but the dust is disurbed..... someone has been here.`,
      choices: [
        {
          text: "Go towards the blackboard",
          invoke: () =>
            console.log(
              "\x1b[33m",
              `\n Lets look more closely at this strange language \n`
            ),
          targetRoomName: "blackboard"
        },
        {
          text: "Walk over to the boarded up windows",
          invoke: () =>
            console.log(
              "\x1b[33m",
              "\n Light is streaming through the cracks. Atleast you can see what you're doing... \n"
            ),
          targetRoomName: "window"
        },
        {
          text: "Sit down and cry",
          invoke: () =>
            console.log("\x1b[31m", `\n Doesnt really help matters \n`),
          targetRoomName: "startGame"
        },
        {
          text: "Go over to the desk",
          invoke: () =>
            console.log(
              "\x1b[33m",
              "\n The desk is covered in dust, it looks undisturbed. \n"
            ),
          targetRoomName: "desk"
        },
        {
          text: "Look in your pockets",
          invoke: () => {
            if (game.inventory.length === 0) {
              console.log("\x1b[31m", `\n You haven't picked up any items yet`);
            } else {
              console.log("\x1b[33m", `\n You have found: ${game.inventory.join(', ')}`)
            };
            if (game.attributes.length === 0) {
              console.log("\x1b[31m", `You haven't learnt any useful skills yet \n`);
            } else {
              console.log("\x1b[33m", `You have learnt: ${game.attributes} \n`)
            };
          },
          targetRoomName: "mainRoom"
        },
        {
          text: "Try the door",
          invoke: function() {
            if (game.inventory.includes("rusty key")) {
              console.log(
                "\x1b[32m",
                "\n You use the rusty key, it fits! \n",
                "\x1b[0m"
              );
              this.targetRoomName = null;
            } else
              console.log(
                "\x1b[33m",
                `\n Unfortunately that door is locked. \n`
              );
          },
          targetRoomName: "mainRoom"
        }
      ]
    },
    window: {
      message:
        "The boards are nailed tight, but on the window sill you see a small lock box",
      choices: [
        {
          text: "Peer out the gaps between the wooden boards",
          invoke: () =>
            console.log(
              "\x1b[33m",
              "\n You see a deserted playground. The grass is overgrowth and only the tops of the rusted framed are visable. \n"
            ),
          targetRoomName: "window"
        },
        {
          text: "Look more closely at the small lock box",
          targetRoomName: "lockBox"
        },
        {
          text: "Leave it for now",
          targetRoomName: "mainRoom"
        }
      ]
    },
    blackboard: {
      message: `\n You see the strange language on the blackboard is quite logical. What do you do? \n`,
      invoke: function() {
        if (game.inventory.includes("CLUE: const keys = { b: 2, u: 8, g: 4 }")) {
          let clueIndex = this.choices.findIndex(
            i => i.text === "Study language"
          );
          this.choices.splice(clueIndex, 1);
        }
      },choices: [
        {
          text: "Give up it looks too hard",
          invoke: () => console.log("\x1b[31m", `\n Sit down and cry \n`),
          targetRoomName: "startGame"
        },
        {
          text: "Study language",
          invoke: () => {
            if (
              game.attributes.includes("JavaScript") &&
              game.inventory.includes("pencil") &&
              game.inventory.includes("paper")
            ) {
              console.log(
                "\x1b[32m",
                `\n You notice something strange. \n const keys = { b: 2, u: 8, g: 4 } \n`
              );
              game.pickUpItem("CLUE: const keys = { b: 2, u: 8, g: 4 }");
            } else {
              game.learn("JavaScript");
              console.log(
                "\x1b[32m",
                "\n Congratulations! After minutes of study you have learnt JavaScript. That was sooo easy! \n"
              );
            }
          },
          targetRoomName: "blackboard"
        },
        {
          text: "Rub it all out and write a pretty poem",
          invoke: () =>
            console.log("\x1b[31m", `\n That wasn't very smart! \n`),
          targetRoomName: "startGame"
        },
        {
          text: "Leave it for now",
          targetRoomName: "mainRoom"
        }
      ]
    },
    desk: {
      message: `You open the desk and look inside. `,
      invoke: function() {
        if (game.inventory.includes("pencil")) {
          let pencilIndex = this.choices.findIndex(
            i => i.text === "Pick up the long forgotten pencil"
          );
          this.choices.splice(pencilIndex, 1);
        }
        if (game.inventory.includes("paper")) {
          let paperIndex = this.choices.findIndex(
            i => i.text === "Pick up the blank, yellowing paper"
          );
          this.choices.splice(paperIndex, 1);
        }
      },
      choices: [
        {
          text: "Pick up the long forgotten pencil",
          invoke: () => {
            game.pickUpItem("pencil");
            console.log("\x1b[32m", "\n You now have the pencil \n");
          },
          targetRoomName: "desk"
        },
        {
          text: "Pick up the blank, yellowing paper",
          invoke: () => {
            game.pickUpItem("paper");
            console.log("\x1b[32m", "\n You now have the paper \n");
          },
          targetRoomName: "desk"
        },
        {
          text: "Oooo an old maths compass",
          targetRoomName: "_newName"
        },
        {
          text: "Go back to the main room",
          targetRoomName: "mainRoom"
        }
      ]
    },
    lockBox: {
      message:
        "Upon closer inspection you see that it is locked with a combination lock made up of 3 numbers. There is also a small note attached.",
      choices: [
        {
          text: "Try random number",
          invoke: function() {
            const num1 = Math.abs(Math.floor(Math.random() * 10 - 0.1));
            const num2 = Math.abs(Math.floor(Math.random() * 10 - 0.1));
            const num3 = Math.abs(Math.floor(Math.random() * 10 - 0.1));
            const passwordAttempt = num1 + '-' + num2 + '-' + num3;
            console.log("\x1b[33m", `\n ${passwordAttempt}`);
            if (passwordAttempt === "2-8-4") {
              console.log(
                "\x1b[32m",
                `Congratulations ${
                  game.playername
                }, you've found the rusty key! \n`
              );
              game.pickUpItem("rusty key");
            } else {
              console.log(
                "\x1b[31m",
                `Not this one, we could be at this a while \n`
              );
            }
          },
          targetRoomName: "lockBox"
        },
        {
          text: "Use clue you found earlier",
          invoke: function() {
            if (game.inventory.includes("CLUE: const keys = { b: 2, u: 8, g: 4 }")) {
              game.pickUpItem("rusty key");
              console.log(
                "\x1b[32m",
                `\n Congratulations ${
                  game.playername
                }, you've found the rusty key! \n`
              );
            } else console.log("\x1b[31m", "\n What clue? \n");
          },
          targetRoomName: "mainRoom"
        },
        {
          text: "Read small note",
          invoke: () =>
            console.log(
              "\x1b[33m",
              "\n Password: What is an unexpected feature? \n"
            ),
          targetRoomName: "lockBox"
        },
        {
          text: "Leave it for now",
          targetRoomName: "mainRoom"
        }
      ]
    },
    _newName: {
      message: `What should I scratch? `,
      choices: [
        {
          text: "theCodeFox",
          invoke: () => {
            console.log("\x1b[33m", `\n Hello theCodeFox \n `);
            game.changePlayername("theCodeFox");
          },
          targetRoomName: "desk"
        },
        {
          text: "nightCoder",
          invoke: () => {
            console.log("\x1b[33m", `\n Hello nightCoder \n `);
            game.changePlayername("nightCoder");
          },
          targetRoomName: "desk"
        },
        {
          text: "Shaq",
          invoke: () => {
            console.log("\x1b[33m", `\n Hello Shaq \n `);
            game.changePlayername("Shaq");
          },
          targetRoomName: "desk"
        }
      ]
    }
  };
}

module.exports = getRooms;
