import React, { Component } from 'react';
import Bar from './Bar';
import './stylesheets/Stack.css';

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
    const { stack } = this.state;
    const { status } = this.props;
    return (
      <section className="stack">
        
        <Bar stack={stack} status={status}/>

      </section>
    )
  }
}

export default Stack
