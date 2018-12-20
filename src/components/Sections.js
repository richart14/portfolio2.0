import React, { Component } from 'react'
import Connect from './Connect';
import Stack from './Stack';
import AboutMe from './AboutMe';
import Projects from './Projects';

export class Sections extends Component {
  render() {
    const { connect } = this.props;
    return (
      <div className="sections">
        <AboutMe />
        <Connect status={ connect }/>
        <Projects />
        <Stack />
      </div>
    )
  }
}

export default Sections
