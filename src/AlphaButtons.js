// Move generateButtons
// generate all the buttons here

import React, { Component } from "react";

class AlphaButtons extends Component {

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  render() {

    return (
      <p className='Hangman-btns'>{this.generateButtons()}</p>
    )
  }

}

export default AlphaButtons ;


