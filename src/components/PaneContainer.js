import React, { Component } from 'react';
import Pane from './Pane';
import Square from './Square';

export class PaneContainer extends Component {

  render() {
    const { toggleShake, toggleSquare, parts, toggleP1, toggleP2, toggleP3, toggleP4 } = this.props;
    const { square, p1, p2, p3, p4 } = parts;
    return (
      <div className="pane-container">
        <Pane 
          id={p1} 
          togglePane={e => {toggleP1();}}
        />
        <Pane 
          id={p2} 
          togglePane={e => {toggleP2();}}
        />
        <Pane 
          id={p3}
          togglePane={e => {toggleP3();}}
        />
        <Pane 
          id={p4}
          togglePane={e => {toggleP4();}}
        />
        <Square shake={square.shake} toggleLand={e => {
          toggleShake(); 
          toggleSquare();
        }} />
      </div>
    )
  }
}

export default PaneContainer
