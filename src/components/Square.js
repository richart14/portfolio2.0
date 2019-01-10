import React, { Component } from 'react';
import power from './images/power.png';
import './stylesheets/Square.css';

export class Square extends Component {
  render() {
    const { shake, toggleLand } = this.props;

    return (
      <div className="square" id="square">
        <img className={`power ${ shake ? 'shake' : '' }`}src={power} alt="logo" onClick={toggleLand} />
      </div>
    )
  }
}

export default Square
