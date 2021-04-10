# Terminal Escape

## Overview

Originally created with Shaq, this was a play piece utilising inquirer to explore a more object orientated approach to programming. This was a mini project completed during our Northcoder days and so I have transfered it into my repo as original repo has been lost... probably in a terminal game.

---

## Background

You may or may not have partaken in the 'Choose Your Own' genre of storybooks or computer games - either way, the concept is simple. You play a character in a certain situation, and then can choose what to do or where to go next. A classic is [The Oregon Trail](https://classicreload.com/oregon-trail.html) which was created for educational purposes, but spectacularly backfired into something entertaining, challenging and thought-provoking.

If you were to think about these games from a programming perspective, you could reduce them down to some key concepts:

- _State_ that represents what is happening or the situation of the game. Examples could be where your character is, what their inventory is, how long it has been since they last slept, what the weather is, and so on.
- _Actions_ that the player can choose to do. Examples could be to travel somewhere else, interact with something where they are, go to sleep, ponder the weather, and so on.

Object Oriented Programming is a natural fit for this sort of structure. The _state_ of the game can be represented by the data or properties of an encompassing 'Game' object; the _actions_ can be methods on the object that affect the state. The Game can hold other contents - say a Player, which has an Inventory, which holds an array of Items... and so on.

---

## Play me!

1. Go to GitHub
2. Clone repo (https://github.com/theCodeFox/terminal-escape)
3. Use command `npm i` to install dependancies
4. Use command `npm start`
5. Enjoy!

---

## Code Home

Repo: https://github.com/theCodeFox/terminal-escape

---

**Authors**: theCodeFox and shobbsd