import React, { Component } from 'react';
import profilepic from './images/profilepic.jpg';
import './stylesheets/AboutMe.css';

export class AboutMe extends Component {
  render() {
    const { status } = this.props;
    return (
      <section className="about">
        <div className={`about-box ${ status.active ? '' : 'hide'}`}>
          <img className="profile-pic" src={profilepic} alt="Richard Tom" />
          <span className="header">Bio</span>
          <span className="detail">I've always felt an affinity for logical thinking and have always found problem solving to be a pasttime rather than a chore. I am a board game fanantic and I love learning new instructions, rules, and game structures. At the start of 2018 was when I decided I would take a leap of faith and commit to web development full time and I have not regretted it since. I enjoyed learning all the languages, wireframes, libraries and anything inbetween. During my web development journey, I've had the opportunity to collaborate in group projects and contribute in daily scrums.</span>
        </div>
      </section>
    )
  }
}

export default AboutMe
