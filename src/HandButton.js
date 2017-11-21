import React, { Component } from 'react';

class HandButton extends Component {
  render() {
    return (
      <img src={this.props.imageSrc}
      onClick={this.props.onClick}
    / >
    )
  }
}

export default HandButton;
