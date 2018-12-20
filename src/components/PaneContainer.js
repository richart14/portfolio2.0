import React, { Component } from 'react';
import Pane from './Pane';
import Square from './Square';

export class PaneContainer extends Component {
  constructor(props) {
    super(props);
    this.toggleShake = this.toggleShake.bind(this);
    this.state = {
      p1: {
        status: 'shutter',
        id: 1,
        content: 'connect'
      },
      p2: {
        status: 'shutter',
        id: 2,
        content: 'about me'
      },
      p3: {
        status: 'start shutter',
        id: 3,
        content: 'projects'
      },
      p4: {
        status: 'shutter',
        id: 4,
        content: 'full stack'
      },
      square: {
        shake: true
      }
    }
  }

  toggleShake(e) {
    this.setState({
      square: {
        shake: false
      }
    });
  }

  togglep1(e) {
    const { p1 } = this.state;
    p1.status === 'shutter' ? this.setState({
      p1 : {
        status: '',
        id: 1,
        content: 'connect'
      }
    }) : this.setState({
      p1 : {
        status: 'shutter',
        id: 1,
        content: 'connect'
      }
    }) 
  }

  togglep2(e) {
    const { p2 } = this.state;
    p2.status === 'shutter' ? this.setState({
      p2 : {
        status: '',
        id: 2,
        content: 'about me'
      }
    }) : this.setState({
      p2 : {
        status: 'shutter',
        id: 2,
        content: 'about me'
      }
    }) 
  }

  togglep3(e) {
    const { p3 } = this.state;
    p3.status === 'start shutter' ? this.setState({
      p3 : {
        status: '',
        id: 3,
        content: 'projects'
      }
    }) : this.setState({
      p3 : {
        status: 'start shutter',
        id: 3,
        content: 'projects'
      }
    }) 
  }

  togglep4(e) {
    const { p4 } = this.state;
    p4.status === 'shutter' ? this.setState({
      p4 : {
        status: '',
        id: 4,
        content: 'full stack'
      }
    }) : this.setState({
      p4 : {
        status: 'shutter',
        id: 4,
        content: 'full stack'
      }
    }) 
  }

  render() {
    const { square, p1, p2, p3, p4 } = this.state;
    const { toggleLanding } = this.props;
    return (
      <div className="pane-container">
        <Pane id={p1}/>
        <Pane id={p2}/>
        <Pane id={p3}/>
        <Pane id={p4}/>
        <Square shake={square.shake} toggleLand={e => {
          this.toggleShake(); 
          toggleLanding();
          this.togglep1();
          this.togglep2();
          this.togglep3();
          this.togglep4();
        }} />
      </div>
    )
  }
}

export default PaneContainer
