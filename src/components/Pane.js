import React, { Component } from 'react';
import './stylesheets/Pane.css';

export class Pane extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className={`pane ${id.status} p${id.id}`} id={id.id}>
        <span className="header">{id.content}</span>
      </div>
    )
  }
}

export default Pane
