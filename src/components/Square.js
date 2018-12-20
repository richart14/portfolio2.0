import React, { Component } from 'react';
import mylogo from './images/mylogo.png';
import './stylesheets/Square.css';

export class Square extends Component {
  render() {
    const { shake, toggleLand } = this.props;

    return (
      <div className="square" id="square">
        <img className={`logo ${ shake ? 'shake' : '' }`}src={mylogo} alt="logo" onClick={toggleLand} />
      </div>
    )
  }
}

export default Square
