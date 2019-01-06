import React, { Component } from 'react';
import './stylesheets/App.css';
import Clouds from './Clouds';
import Landing from './Landing';
import PaneContainer from './PaneContainer';
import Sections from './Sections';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      landing: {
        shutter: false,
      },
      cloud: {
        display: true
      },
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
      },
      connect: {
        active: false
      },
      about : {
        active: false
      },
      projects : {
        active: false
      },
      stack : {
        active: false
      },
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        mounted: true,
      })
    }, 100);
  }

  handleLandingShut(e) {
    const { landing, cloud } = this.state;
    this.setState({ 
      cloud : { display: !cloud.display },
      landing : { shutter : !landing.shutter }
    })
  }

  toggleShake(e) {
    this.setState({
      square: {
        shake: false
      }
    });
  }

  toggleSquare(e) {
    const { p1, p2, p3, connect, cloud, landing, about, projects } = this.state;
    switch(p1.status) {
      case 'shutter': 
      if (p2.status === 'active') {
        this.setState({
          p1 : {
            status: '',
            id: 1,
            content: 'connect'
          },
          p2 : {
            status: '',
            id: 2,
            content: 'about me'
          }, 
          p3 : {
            status: '',
            id: 3,
            content: 'projects'
          }, 
          p4: {
            status: '',
            id: 4,
            content: 'full stack'
          },
          about : {
            active: !about.active
          }
        });
      } else if ( p3.status === 'extend active' ) {
        this.setState({
          p1 : {
            status: '',
            id: 1,
            content: 'connect'
          },
          p2 : {
            status: '',
            id: 2,
            content: 'about me'
          }, 
          p3 : {
            status: '',
            id: 3,
            content: 'projects'
          }, 
          p4: {
            status: '',
            id: 4,
            content: 'full stack'
          },
          projects : {
            active: !projects.active
          }
        });;
      } else {
        this.setState({
          p1 : {
            status: '',
            id: 1,
            content: 'connect'
          },
          p2 : {
            status: '',
            id: 2,
            content: 'about me'
          }, 
          p3 : {
            status: '',
            id: 3,
            content: 'projects'
          }, 
          p4: {
            status: '',
            id: 4,
            content: 'full stack'
          },
          cloud : { display: !cloud.display },
          landing : { shutter : !landing.shutter }
        });
      }
      break;
      case 'extend active': 
      this.setState({
        p1 : {
          status: '',
          id: 1,
          content: 'connect'
        },
        p2 : {
          status: '',
          id: 2,
          content: 'about me'
        }, 
        p3 : {
          status: '',
          id: 3,
          content: 'projects'
        }, 
        p4: {
          status: '',
          id: 4,
          content: 'full stack'
        },
        connect: {
          active: !connect.active
        },
      });
      break;
      case 'retract': 
      this.setState({
        p1 : {
          status: '',
          id: 1,
          content: 'connect'
        },
        p2 : {
          status: '',
          id: 2,
          content: 'about me'
        }, 
        p3 : {
          status: '',
          id: 3,
          content: 'projects'
        }, 
        p4: {
          status: '',
          id: 4,
          content: 'full stack'
        },
      });
      break;
      default: 
      this.setState({
        p1 : {
          status: 'shutter',
          id: 1,
          content: 'connect'
        },
        p2 : {
          status: 'shutter',
          id: 2,
          content: 'about me'
        },
        p3 : {
          status: 'start shutter',
          id: 3,
          content: 'projects'
        },
        p4 : {
          status: 'shutter',
          id: 4,
          content: 'full stack'
        },
        cloud : { display: !cloud.display },
        landing : { shutter : !landing.shutter }
      });
    }
  }

  toggleP1(e) {
    const { connect, p1, p2, p3, p4 } = this.state;
    this.setState({
      connect: {
        active: !connect.active
      },
      p1: {
        status: p1.status === '' ? 'extend active' : '',
        id: 1,
        content: 'connect'
      },
      p2: {
        status: p2.status === '' ? 'shutter' : '',
        id: 2,
        content: 'about me'
      },
      p3: {
        status: p3.status === '' ? 'clear extend' : '',
        id: 3,
        content: 'projects'
      },
      p4: {
        status: p4.status === '' ? 'shutter' : '',
        id: 4,
        content: 'full stack'
      },
    })
  }

  toggleP2(e) {
    const { about, p1, p2, p3, p4 } = this.state;
    this.setState({
      about: {
        active: !about.active
      },
      p1: {
        status: p1.status === '' ? 'shutter' : '',
        id: 1,
        content: 'connect'
      },
      p2: {
        status: p2.status === '' ? 'active' : '',
        id: 2,
        content: 'about me'
      },
      p3: {
        status: p3.status === '' ? 'shutter' : '',
        id: 3,
        content: 'projects'
      },
      p4: {
        status: p4.status === '' ? 'shutter' : '',
        id: 4,
        content: 'full stack'
      },
    })
  }

  toggleP3(e) {
    const { projects , p1, p2, p3, p4 } = this.state;
    this.setState({
      projects : {
        active: !projects.active
      },
      p1: {
        status: p1.status === '' ? 'shutter' : '',
        id: 1,
        content: 'connect'
      },
      p2: {
        status: p2.status === '' ? 'shutter' : '',
        id: 2,
        content: 'about me'
      },
      p3: {
        status: p3.status === '' ? 'extend active' : '',
        id: 3,
        content: 'projects'
      },
      p4: {
        status: p4.status === '' ? 'shutter' : '',
        id: 4,
        content: 'full stack'
      },
    })
  }

  toggleP4(e) {
    const { stack , p1, p2, p3, p4 } = this.state;
    this.setState({
      stack : {
        active: !stack.active
      },
      p1: {
        status: p1.status === '' ? 'retract' : '',
        id: 1,
        content: 'connect'
      },
      p2: {
        status: p2.status === '' ? 'clear' : '',
        id: 2,
        content: 'about me'
      },
      p3: {
        status: p3.status === '' ? 'shutter' : '',
        id: 3,
        content: 'projects'
      },
      p4: {
        status: p4.status === '' ? 'active' : '',
        id: 4,
        content: 'full stack'
      },
    })
  }

  render() {
    const { mounted, landing, cloud, p1, p2, p3, p4, square, connect, about, projects, stack } = this.state;

    return (
      <div className="App">
        <Clouds inverse={false}/>
        <Clouds inverse={true} display={cloud.display}/>
        <Landing shutState={landing.shutter} mounted={mounted}/>
        <PaneContainer 
          toggleSquare={e => this.toggleSquare(e)} 
          toggleShake={e => this.toggleShake(e)} 
          parts={{p1,p2,p3,p4,square}}
          toggleP1={e => this.toggleP1(e)}
          toggleP2={e => this.toggleP2(e)}
          toggleP3={e => this.toggleP3(e)}
          toggleP4={e => this.toggleP4(e)}
        />
        <Sections connect={connect} about={about} projects={projects} stack={stack}/>
      </div>
    );
  }
}

export default App;
