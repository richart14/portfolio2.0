import React, { Component } from 'react'

export class Links extends Component {
  render() {
    const { href, icon, blank, index } = this.props;
    return (
      <a href={href} target={ blank ? "_blank" : "" }>
        <div className="icon pop-in" id={`icon-${index}`}>
          <i className={icon} />
        </div>
      </a>
    )
  }
}

export default Links
