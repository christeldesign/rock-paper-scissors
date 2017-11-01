import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Create initial state
  constructor(props){
    super(props);
    this.state = { 
      'computerChoice' : 'none',
      'userChoice' : 'none',
      'computerScore' : 0,
      'userScore' : 0 
    }

    // Have to bind "this" in the function scope later to "this" in class App
    this.randomComputerChoice = this.randomComputerChoice.bind(this);
    this.reset = this.reset.bind(this);
  }

  // Helper function to pick computer choice
  randomComputerChoice(userChoice){


    var computerChoices = [ "rock", "paper", "scissors" ];

    var i = Math.floor(Math.random()*computerChoices.length);

    this.setState({'computerChoice' : computerChoices[i],
                   'userChoice' : userChoice });

    // Figure out who won
    if(userChoice === computerChoices[i] ){
      alert('draw');
    }else if((userChoice == 'rock'     && computerChoices[i] == 'scissors') || 
             (userChoice == 'paper'    && computerChoices[i] == 'rock')     || 
             (userChoice == 'scissors' && computerChoices[i] == 'paper')){
      this.setState({'userScore': this.state.userScore+1});
      alert('user wins');
    }else{
      this.setState({'computerScore': this.state.computerScore+1})
      alert('computer wins');
    }

  }

  // Helper function to reset everything

  reset(){

    this.setState({ 
      'computerChoice' : 'none',
      'userChoice' : 'none',
      'computerScore' : 0,
      'userScore' : 0 
    });

  }

  render() {

    const computerChoice = this.state.computerChoice;
    const userChoice = this.state.userChoice;
    const computerScore = this.state.computerScore;
    const userScore = this.state.userScore;

    return (
      <div className="App">
        <h1>Rock Paper Scissors</h1>

        <h2>Computer</h2>

        <div className="scoreboard">{computerScore}</div>
        <div className="choice">{computerChoice}</div>

        <h2>User</h2>

        <div className="Scoreboard">{userScore}</div>
        <div className="choice">{userChoice}</div>

        <button onClick={() => this.randomComputerChoice('rock')}>Rock</button>
        <button onClick={() => this.randomComputerChoice('paper')}>Paper</button>
        <button onClick={() => this.randomComputerChoice('scissors')}>Scissors</button>

        <button onClick={ this.reset }>Reset Game</button>
      </div>
    );
  }
}

export default App;
