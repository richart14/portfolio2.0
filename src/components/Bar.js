import React, { Component } from 'react'

export class Bar extends Component {
  render() {
    const { status } = this.props;
    return (
      <div className={`container ${status.active ? '' : 'hide'}`}>
      
        <div className="bar"><div className="inner">CSS3</div></div>
        <div className="bar"><div className="inner">HTML5</div></div>
        <div className="bar"><div className="inner">JAVASCRIPT</div></div>
        <div className="bar"><div className="inner">REACT</div></div>
        <div className="bar"><div className="inner">REDUX</div></div>
        <div className="bar"><div className="inner">NODE.JS</div></div>
        <div className="bar"><div className="inner">EXPRESS</div></div>
        <div className="bar"><div className="inner">MONGODB</div></div>
        <div className="bar"><div className="inner">SQL</div></div>
      </div>
    )
  }
}

export default Bar
