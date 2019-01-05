import React, { Component } from 'react';
import './stylesheets/Projects.css';
import Carousel from './Carousel';
import Modal from './Modal';
import aslPic from './images/projects/asl-app.png';
import shavPic from './images/projects/shaving.png';
import travelPic from './images/projects/travelapp.png';
import fullAslPic from './images/projects/fullasl-app.png';
import fullShavPic from './images/projects/fullshaving.png';
import fullTravelPic from './images/projects/fulltravelapp.png';

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useFull: window.innerWidth <= 760, 
      projects : [
        {
          name: 'ShaveReducer',
          description: 'Traditionally, the shaving community keeps track of their shaves and products in spreadsheet files. ShaveReducer servers as a shave logger for the shave enthusiast community so they can easily track their shaves and products. Users have freedom to continue from their already existing spreadsheets as well!',
          frontend: 'React, Redux, Redux-Thunk, React-Router, Moment, React-Tabs, React-Modal, Enzyme/Jest, HTML5, CSS3, CI(Travis), CD(Netlify)',
          backend: 'Node.js, Express, MongoDB, Mongoose, Bcrypt, Passport, JSON Web Tokens, Cloudinary, Mocha/Chai, CI(Travis), CD(Heroku)',
          img: shavPic,
          fullimg: fullShavPic,
          url: 'https://hetokibo-shaving-client.herokuapp.com/',
          github: 'https://github.com/thinkful-ei22/shaving-tracker-client'
        },
        {
          name: 'uh-SIGN-ment',
          description: 'Inspired by the want to be able to understand a recent deaf friend, I created uh-SIGN-ment. uh-SIGN-ment allows the user to learn the basics of American Sign Language! The user can log in and learn the ASL alphabet. Users are given feedback as they are learning using space repetition.',
          frontend: 'React, Redux, Redux-Thunk, React-Router, HTML5, CSS3, Responsive Design, CD (Netlify)',
          backend: 'Node.js, Express, MongoDB, Mongoose, Bcrypt, JSON Web Tokens, Passport.js, Mocha/Chai, CI (Travis), CD (Heroku)',
          img: aslPic,
          fullimg : fullAslPic,
          url: 'https://sign-app-client.herokuapp.com/',
          github: 'https://github.com/thinkful-ei22/asl-client-richard-akim',
        },
        {
          name: 'Itinerary Planner',
          description: 'Usually when I\'m planning a trip, I used a word document to keep track of places I\'m visiting and logistics stuff such as reservation ids. Itinerary planner is meant to assist the user in tracking their trips in an intuitive way.',
          frontend: 'React, Redux, Redux-Thunk, React-Router, React-Forms HTML5, CSS3, Responsive Design, CD (Netlify)',
          backend: 'Node.js, Express, MongoDB, Mongoose, Bcrypt, JSON Web Tokens, Mocha/Chai, CI (Travis), CD (Heroku)',
          img: travelPic,
          fullimg: fullTravelPic,
          url: 'https://itinerary-planner.netlify.com/',
          github: 'https://github.com/richart14/travel-app-client',
        },
      ],
      showModal: false,
      currentSlide: 0,
    }
    this.resize = this.resize.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.slideChange = this.slideChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    this.setState({useFull: window.innerWidth <= 760});
  }

  toggleModal() {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal })
  }

  slideChange(next) {
    this.setState({currentSlide: next})
  }

  render() {
    const { status } = this.props;
    const { projects, showModal, useFull, currentSlide } = this.state;
    return (
      <section className={`projects ${ status.active ? 'show' : '' }`}>
        <Modal 
          showModal={showModal} 
          useFull={useFull} 
          toggleModal={e => this.toggleModal()}
          currentSlide={projects[currentSlide]}
        />
        <Carousel 
          full={useFull} 
          projects={ projects } 
          toggleModal={e => this.toggleModal()}
          slideChange={e => this.slideChange(e)}
          currentSlide={currentSlide}
        />
      </section>
    )
  }
}

export default Projects
