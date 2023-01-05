# Tennis score

This is tennis score javascript application using Test Driven Development

## Mechanism

The scoring system is rather simple:

- Each player can have either of these points in one game: 0 15 30 40
- If you have 40 and you win the ball you win the game, however there are special rules:
  - If both have 40 the players are deuce.
  - If the game is in deuce, the winner of a ball will have advantage and game ball.
  - If the player with advantage wins the ball he wins the game
  - If the player without advantage wins they are back at deuce.
