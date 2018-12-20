import React, { Component } from 'react';
import './stylesheets/App.css';
import Clouds from './Clouds';
import Landing from './Landing';
// import Matrix from './Matrix';
import PaneContainer from './PaneContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landing: {
        shutter: false
      },
      cloud: {
        display: true
      }
    }
  }

  handleLandingShut(e) {
    const { landing, cloud } = this.state;
    this.setState({ 
      cloud : { display: !cloud.display },
      landing : { shutter : !landing.shutter }
    })
  }

  render() {
    const { landing, cloud } = this.state;

    return (
      <div className="App">
        <Clouds inverse={false}/>
        <Clouds inverse={true} display={cloud.display}/>
        {/* <Matrix /> */}
        <Landing shutState={landing.shutter}/>
        <PaneContainer toggleLanding={e => this.handleLandingShut(e)}/>
      </div>
    );
  }
}

export default App;
