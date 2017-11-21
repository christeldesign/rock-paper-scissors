import React, { Component } from 'react';
import './App.css';

// Can write "export default class App extends Component {" and skip export at the end
class App extends Component {
  // Create initial state
  constructor (props) {
    super(props);
    this.state = {
      'computerChoice': 'none',
      'userChoice': 'none',
      'computerScore': 0,
      'userScore': 0
    };

    // Have to bind "this" in the function scope later to "this" in class App
    this.randomComputerChoice = this.randomComputerChoice.bind(this);
    this.reset = this.reset.bind(this);
  }

  // Helper function to pick computer choice
  // **Better to define function without passing parameters first OUTSIDE OF COMPONENT because the logic is not really tied to logic to the game, just a helper function
  randomComputerChoice (userChoice) {
    // Array to store computer choices
    var computerChoices = [ 'rock', 'paper', 'scissors' ];

    // Store random choice by computer
    var i = Math.floor(Math.random() * computerChoices.length);

    // Set choice for computer and user in current state
    this.setState({
      'computerChoice': computerChoices[i],
      'userChoice': userChoice });

    // Figure out who won
    // **Better to define function without passing parameters first OUTSIDE OF COMPONENT because the logic is not really tied to logic to the game, just a helper function
    if (userChoice === computerChoices[i]) {
      alert('draw');
    } else if ((userChoice === 'rock' && computerChoices[i] === 'scissors') ||
              (userChoice === 'paper' && computerChoices[i] === 'rock') ||
              (userChoice === 'scissors' && computerChoices[i] === 'paper')) {
      this.setState({'userScore': this.state.userScore + 1});
      alert('User wins');
    } else {
      this.setState({'computerScore': this.state.computerScore + 1})
      alert('Computer wins');
    }
  }

  // Helper function to reset everything
  reset () {
    this.setState({
      'computerChoice': 'none',
      'userChoice': 'none',
      'computerScore': 0,
      'userScore': 0
    });
  }
  // Render to clientside
  render () {
    const computerChoice = this.state.computerChoice;
    const userChoice = this.state.userChoice;
    const computerScore = this.state.computerScore;
    const userScore = this.state.userScore;

    return (
      <div className="App">
        <h1>Rock Paper Scissors</h1>

        <h2>Computer</h2>

        {/* Better to put ScoreBoard as a separate component */}
        <div className="scoreboard">{computerScore}</div>
        <div className="choice">{computerChoice}</div>

        <h2>User</h2>

        <div className="Scoreboard">{userScore}</div>
        <div className="choice">{userChoice}</div>

        {/* Better to use components for HandButton */}
        <button onClick={() => this.randomComputerChoice('rock')}>Rock</button>
        <button onClick={() => this.randomComputerChoice('paper')}>Paper</button>
        <button onClick={() => this.randomComputerChoice('scissors')}>Scissors</button>

        <button onClick={ this.reset }>Reset</button>
      </div>
    );
  }
}

export default App;
