import React, { Component } from 'react';
import Slider from "react-slick";
import './stylesheets/Carousel.css';


export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      infinite: true,
      dotsCount: 4,
      arrows: false,
      focusOnSelect: true,
      speed: 500,
    };

    const { projects, full } = this.props;
    const projectJSX = projects.map((project, i ) => {
      return (
        <div className="portfolio-item" id={`item-${i+1}`} key={`item-${i+1}`}>
          <div className="caption">
            <div className="caption-content">
              <i className="fa fa-search-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={full ? project.img : project.fullimg} alt={`Project: ${project.name}`}/>
        </div>
      );
    });

    return (
      <div className="carousel" id="projects-carousel">
        <i className="fa fa-chevron-left" id="slick-prev" onClick={this.previous}></i>
        <i className="fa fa-chevron-right" id="slick-next" onClick={this.next}></i>
        <Slider className="carousel" ref={c => this.slider = c}{...settings}>
          {projectJSX}
        </Slider>
      </div>
    );
  }
}

export default Carousel
