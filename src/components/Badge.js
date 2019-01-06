import React, { Component } from 'react'

export class Badge extends Component {
  render() {
    const { stack, status } = this.props;
    return (
      <div className={`container ${status.active ? '' : 'hide'}`}>
        
      </div>
    )
  }
}

export default Badge
