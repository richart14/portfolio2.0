import React, { Component } from 'react'
import './stylesheets/Landing.css'

export class Landing extends Component {
  
  render() {
    const { shutState, mounted } = this.props;
    return (
      <section className={`landing ${ shutState ? 'shutter' : '' }`}>
        <span className={`title ${ mounted ? 'show' : '' }`}><span className={`highlight ${ mounted ? 'show' : ''}`}>r</span>ichard<span className={`highlight ${ mounted ? 'show' : ''}`}>t</span>om</span>
        <div className="tag-box">
          <span className={ mounted ? 'show' : '' }>problem solver</span>
          <span className={`center ${ mounted ? 'show' : '' }`}>full-stack developer</span>
          <span className={ mounted ? 'show' : '' }>traveler</span>
        </div>
      </section>
    )
  }
}

export default Landing
