import React, { Component } from 'react';

class ScoreBoard extends Component {
  render() {
    return (
      <div>
        <div>
          Player - {this.props.userScore}
        </div>
        <div>
          Computer - {this.props.computerScore}
        </div>
      </div>
    )
  }
}

export default ScoreBoard;
