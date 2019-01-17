import React, { Component } from 'react'

export class Bar extends Component {
  render() {
    const { status } = this.props;
    return (
      <div className={`container ${status.active ? '' : 'hide'}`}>
      
        <div className="bar"><div className="inner"><i class="devicon-css3-plain-wordmark"></i><span>CSS3</span></div></div>
        <div className="bar"><div className="inner"><i class="devicon-html5-plain-wordmark"></i><span>HTML5</span></div></div>
        <div className="bar"><div className="inner"><i class="devicon-javascript-plain"></i><span>JAVASCRIPT</span></div></div>
        <div className="bar"><div className="inner"><i class="devicon-java-plain-wordmark"></i><span>JAVA</span></div></div>
        <div className="bar"><div className="inner"><i class="devicon-react-original-wordmark"></i><span>REACT</span></div></div>
        {/* <div className="bar"><div className="inner"><span>REDUX</span></div></div> */}
        <div className="bar"><div className="inner"><i class="devicon-heroku-original-wordmark"></i><span>HEROKU</span></div></div>
        <div className="bar"><div className="inner"><i class="devicon-jquery-plain-wordmark"></i><span>JQUERY</span></div></div>
        <div className="bar"><div className="inner"><i class="devicon-nodejs-plain-wordmark"></i><span>NODE.JS</span></div></div>
        <div className="bar"><div className="inner"><i class="devicon-express-original-wordmark"></i><span>EXPRESS</span></div></div>
        <div className="bar"><div className="inner"><i class="devicon-mongodb-plain-wordmark"></i><span>MONGODB</span></div></div>
        <div className="bar"><div className="inner"><i class="devicon-mysql-plain-wordmark"></i><span>SQL</span></div></div>
        <div className="bar"><div className="inner"><i class="devicon-mocha-plain"></i><span>MOCHA</span></div></div>
      </div>
    )
  }
}

export default Bar
