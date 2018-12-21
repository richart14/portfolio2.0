import React, { Component } from 'react'
import Connect from './Connect';
import Stack from './Stack';
import AboutMe from './AboutMe';
import Projects from './Projects';

export class Sections extends Component {
  render() {
    const { connect, about } = this.props;
    return (
      <div className="sections">
        <AboutMe status={ about } />
        <Connect status={ connect }/>
        <Projects />
        <Stack />
      </div>
    )
  }
}

export default Sections
