import React, { Component } from 'react'
import './stylesheets/Landing.css'

export class Landing extends Component {
  render() {
    return (
      <section className="landing">
        <span className="title">richard<span className="highlight">tom</span></span>
        <div className="tag-box">
          <span>coding enthusiast</span>
          <span className="center">full-stack developer</span>
          <span>traveler</span>
        </div>
      </section>
    )
  }
}

export default Landing
