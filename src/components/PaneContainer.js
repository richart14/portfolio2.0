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
          togglePane={e => toggleP1()}
        />
        <Pane 
          id={p2} 
          togglePane={e => p2.status === "clear" ? null : toggleP2()}
        />
        <Pane 
          id={p3}
          togglePane={e => p3.status === "clear extend" ? null : toggleP3()}
        />
        <Pane 
          id={p4}
          togglePane={e => p4.status === "shutter" ? null : toggleP4()}
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
