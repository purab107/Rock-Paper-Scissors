# Rock Paper Scissors Game

This is a simple **Rock Paper Scissors** game implemented using HTML, CSS, and JavaScript. You can play against the computer and see your score, which is saved across sessions.

## Features

- **Play the game**: Choose Rock, Paper, or Scissors and compete against the computer.
- **Score tracking**: The game keeps track of your wins, losses, and ties using `localStorage`.
- **Reset score**: Reset your score to start fresh at any time.
- **Animations**: Enjoy dynamic text animations in the title and interactive button effects.

## How to Play

1. Open the game in your browser.
2. Click on one of the move buttons (**Rock**, **Paper**, or **Scissors**).
3. See the result and keep track of your score.
4. You can reset the score by clicking the **Reset Score** button.

## Files

- `index.html`: The main HTML file that contains the structure of the game.
- `style.css`: The CSS file that styles the game layout, buttons, and animations.
- `script.js`: The JavaScript file that handles the game logic, including move generation, result calculation, score updating, and local storage.

## Code Overview

### HTML Structure

- The game is housed in a `<div>` with the class `container`.
- There are buttons for **Rock**, **Paper**, and **Scissors**, which use the `onclick` attribute to call the `playGame()` function.
- The result and move history are displayed using `<h2>` and `<p>` elements.
- A reset button resets the score using the `resetScore()` function.

### CSS Styling

- The page uses a black background with white text.
- The game buttons are circular with a hover and active state that adds a glowing effect.
- Custom animations change the font style of the title text, giving it a playful, dynamic effect.

### JavaScript Functionality

- `playGame(playerMove)`: This function compares the player's move with a randomly chosen move by the computer and updates the result.
- `pickComputerMove()`: This function generates a random move for the computer (**Rock**, **Paper**, or **Scissors**).
- `updateScoreElement()`: Updates the score displayed on the screen by accessing data stored in `localStorage`.
- `resetScore()`: Resets the score to 0 and clears the saved score in `localStorage`.

## Local Storage

The game uses `localStorage` to store the player's score across sessions. This means your score will persist even if you close the browser and come back later.

## Installation

No installation is required. Just open the `index.html` file in any web browser, and the game will load automatically.

## Credits

- **Emoji icons**: Used for the moves are simple images of **Rock**, **Paper**, and **Scissors**.
- **Font animations**: Use Google Fonts for a variety of styles.
