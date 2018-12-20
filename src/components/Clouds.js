import React, { Component } from 'react'
import './stylesheets/Clouds.css'

export class Clouds extends Component {
  render() {
    const { inverse, display } = this.props;
    return (
      <div className={`${inverse ? 'clouds inverse' : 'clouds'} ${ inverse ? display ? '' : 'hide' : '' }`}>
        <div className="cloud" id="cloud-1"></div>
        <div className="cloud" id="cloud-2"></div>
        <div className="cloud" id="cloud-3"></div>       
      </div>
    )
  }
}

export default Clouds
