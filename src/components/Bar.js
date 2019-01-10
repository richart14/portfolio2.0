import React, { Component } from 'react'

export class Bar extends Component {
  render() {
    const { status } = this.props;
    return (
      <div className={`container ${status.active ? '' : 'hide'}`}>
      
        <div className="bar"><div className="inner"><span>CSS3</span></div></div>
        <div className="bar"><div className="inner"><span>HTML5</span></div></div>
        <div className="bar"><div className="inner"><span>JAVASCRIPT</span></div></div>
        <div className="bar"><div className="inner"><span>JAVA</span></div></div>
        <div className="bar"><div className="inner"><span>REACT</span></div></div>
        <div className="bar"><div className="inner"><span>REDUX</span></div></div>
        <div className="bar"><div className="inner"><span>NODE.JS</span></div></div>
        <div className="bar"><div className="inner"><span>EXPRESS</span></div></div>
        <div className="bar"><div className="inner"><span>MONGODB</span></div></div>
        <div className="bar"><div className="inner"><span>SQL</span></div></div>
      </div>
    )
  }
}

export default Bar
