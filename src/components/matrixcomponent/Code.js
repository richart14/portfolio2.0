import React, { Component } from 'react';
import Symbol from './Symbol';
import '../stylesheets/Code.css';
import _ from 'lodash';

const SYMBOL_HEIGHT = 35;
const SYMBOL_WIDTH = 18;
// Empirically, Depends on Symbol font-size

export class Code extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codeLength: 0,
      yPosition: 0,
      xPosition: 0,
      transition: '',
      transform: '',
    }
  }

  componentWillMount() {
    const scaleRatio = _.random(0.8, 1.4);

    const minCodeHeight = _.round(window.innerHeight / SYMBOL_HEIGHT);
    const codeLength = _.random(minCodeHeight, minCodeHeight * 2)

    const yPosition = (codeLength + 1) * SYMBOL_HEIGHT * scaleRatio * 1.5;

    const stepCount = _.round((window.innerWidth - 20) / SYMBOL_WIDTH);
    const xPosition = _.random(0, stepCount) * SYMBOL_WIDTH;

    const transition = `top linear ${_.random(5,10)/ scaleRatio}s`;
    const transform = `scale(${scaleRatio})`;

    this.setState({
      codeLength, yPosition, xPosition, transform, transition
    })
  }

  componentDidMount() {
    const startTime = _.random(300,10000);

    setTimeout(() => {
      const newHeight = window.innerHeight + this.state.yPosition;
      this.setState({yPosition: -newHeight});
    }, startTime)
  }

  render() {
    const code = _.times(this.state.codeLength).map((x,i) => (
      <Symbol key={i} opacity={i <= 5 ? i/5 : 1} />
    ));
    const {
      yPosition, xPosition, transition, transform 
    } = this.state;

    const styles = {
      left: xPosition,
      top: -yPosition,
      transition,
      transform,
    }
    
    return (
      <div className="code" style={styles}>
        {code}
        <Symbol primary="true" />
      </div>
    )
  }
}

export default Code
