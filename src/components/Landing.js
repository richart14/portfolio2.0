import React, { Component } from 'react'
import './stylesheets/Landing.css'

export class Landing extends Component {
  
  state = {
    opacity: 0,
  }
  render() {
    const { shutState } = this.props;
    return (
      <section className={`landing ${ shutState ? 'shutter' : '' }`}>
        <span className="title">richard<span className="highlight">tom</span></span>
        <div className="tag-box">
          <span>problem solver</span>
          <span className="center">full-stack developer</span>
          <span>enthusiast</span>
        </div>
      </section>
    )
  }
}

export default Landing
