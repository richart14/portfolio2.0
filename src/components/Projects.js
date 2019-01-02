import React, { Component } from 'react';
import './stylesheets/Projects.css';
import Carousel from './Carousel';
import aslPic from './images/projects/asl-app.png';
import shavPic from './images/projects/shaving.png';
import travelPic from './images/projects/travelapp.png';

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects : [
        {
          name: 'ShaveReducer',
          description: 'Traditionally, the shaving community keeps track of their shaves and products in spreadsheet files. ShaveReducer servers as a shave logger for the shave enthusiast community so they can easily track their shaves and products. Users have freedom to continue from their already existing spreadsheets as well!',
          frontend: 'React, Redux, Redux-Thunk, React-Router, Moment, React-Tabs, React-Modal, Enzyme/Jest, HTML5, CSS3, CI(Travis), CD(Netlify)',
          backend: 'Node.js, Express, MongoDB, Mongoose, Bcrypt, Passport, JSON Web Tokens, Cloudinary, Mocha/Chai, CI(Travis), CD(Heroku)',
          img: shavPic,
          url: 'https://hetokibo-shaving-client.herokuapp.com/',
          github: ''
        },
        {
          name: 'uh-SIGN-ment',
          description: 'Inspired by the want to be able to understand a recent deaf friend, I created uh-SIGN-ment. uh-SIGN-ment allows the user to learn the basics of American Sign Language! The user can log in and learn the ASL alphabet. Users are given feedback as they are learning using space repetition.',
          frontend: 'React, Redux, Redux-Thunk, React-Router, HTML5, CSS3, Responsive Design, CD (Netlify)',
          backend: 'Node.js, Express, MongoDB, Mongoose, Bcrypt, JSON Web Tokens, Passport.js, Mocha/Chai, CI (Travis), CD (Heroku)',
          img: aslPic,
          url: '',
          github: '',
        },
        {
          name: 'Itinerary Planner',
          description: 'Usually when I\'m planning a trip, I used a word document to keep track of places I\'m visiting and logistics stuff such as reservation ids. Itinerary planner is meant to assist the user in tracking their trips in an intuitive way.',
          frontend: 'React, Redux, Redux-Thunk, React-Router, React-Forms HTML5, CSS3, Responsive Design, CD (Netlify)',
          backend: 'Node.js, Express, MongoDB, Mongoose, Bcrypt, JSON Web Tokens, Mocha/Chai, CI (Travis), CD (Heroku)',
          img: travelPic,
          url: '',
          github: '',
        },
      ]
    }
  }
  render() {
    const { status } = this.props;
    const { projects } = this.state;
    return (
      <section className={`projects ${ status.active ? 'show' : '' }`}>
        <Carousel projects={ projects }/>
      </section>
    )
  }
}

export default Projects
