import React, { Component } from 'react'
import './stylesheets/Clouds.css'

export class Clouds extends Component {
  render() {
    const { inverse } = this.props;
    let cloudClassType
    inverse ? cloudClassType = "clouds inverse" : cloudClassType = "clouds"
    return (
      <div className={cloudClassType}>
        <div className="cloud" id="cloud-1"></div>
        <div className="cloud" id="cloud-2"></div>
        <div className="cloud" id="cloud-3"></div>       
      </div>
    )
  }
}

export default Clouds
