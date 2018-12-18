import React, { Component } from 'react';
import './stylesheets/App.css';
import Clouds from './Clouds';
import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clouds inverse={false}/>
        <Clouds inverse={true}/>
        <Landing />
      </div>
    );
  }
}

export default App;
