import React, { Component } from 'react'

export class Stack extends Component {
  constructor(props){
    super(props);
    this.state = {
      stack: [
        { name : 'css3', icon : 'fab fa-css3' },
        { name : 'react', icon : 'fab fa-react' },
        { name : 'javascript', icon : 'fab fa-js' },
        
      ]
    }
  }
  render() {

    return (
      <section className="stack">
        <div className="badges-box">
        </div>
      </section>
    )
  }
}

export default Stack
