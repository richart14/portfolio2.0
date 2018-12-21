import React, { Component } from 'react'
import './stylesheets/Landing.css'

export class Landing extends Component {
  
  render() {
    const { shutState } = this.props;
    return (
      <section className={`landing ${ shutState ? 'shutter' : '' }`}>
        <span className="title"><span className="highlight">r</span>ichard<span className="highlight">t</span>om</span>
        <div className="tag-box">
          <span>problem solver</span>
          <span className="center">full-stack developer</span>
          <span>traveler</span>
        </div>
      </section>
    )
  }
}

export default Landing
