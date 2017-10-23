import React, { Component } from 'react';
import './reactive-slider.css';

class ReactiveSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: props.slides,
      timeToShow: props.timeToShow || 3,
      currentSlide: 0
    };

    this.FIRST_SLIDE_VALUE = 0;
    this.LAST_SLIDE_VALUE = this.state.slides.length - 1;
    this.autoplayTimer = null;
  }

  componentDidMount() {
    this.autoplayTimer = setInterval(() => {
      this.nextSlide();
    }, this.state.timeToShow * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.autoplayTimer);
  }

  resetTimer() {
    clearInterval(this.autoplayTimer);

    this.autoplayTimer = setInterval(() => {
      this.nextSlide();
    }, this.state.timeToShow * 1000);
  }

  buildSlider() {
    if (!this.state.slides || !this.state.slides instanceof Array) { return <div><p>Slides not present</p></div> }

    let startingSwipePosition;

    return (
      <div className="reactive-slider-container">
        <div className="reactive-slider">
          <div className="reactive-slider-slide">
            <img src={this.state.slides[this.state.currentSlide]}

                 onTouchStart={(e) => {
                   startingSwipePosition = e.touches[0].clientX;
                 }}

                 onTouchMove={(e) => {
                   let touch = e.touches[0];
                   let fingerMove = startingSwipePosition - touch.clientX;

                   if (fingerMove < -50) {
                     this.prevSlide();
                   } else if (fingerMove > 50) {
                     this.nextSlide();
                   }
                 }}
            />
          </div>
          <div className="reactive-slider-controls">
            <span className="reactive-slider-control-button" onClick={() => this.prevSlide()}>
              &#9665;
            </span>
            &nbsp;
            {this.state.slides.map((slide, i) => {
              return i === this.state.currentSlide
                ? <li className="reactive-slider-dot" key={i} onClick={() => this.showSlide(i)}>
                  &nbsp;&#9679;&nbsp;
                </li>
                : <li className="reactive-slider-dot" key={i} onClick={() => this.showSlide(i)}>
                  &nbsp;&#9675;&nbsp;
                </li>;
              })
            }
             &nbsp;
            <span className="reactive-slider-control-button" onClick={() => this.nextSlide()}>
              &#9655;
            </span>
          </div>
        </div>
      </div>
    );
  }

  showSlide(index) {
    this.setState({
      ...this.state,
      currentSlide: index
    });

    this.resetTimer();
  }

  nextSlide() {
    if (this.state.currentSlide === this.LAST_SLIDE_VALUE) {
      this.showSlide(this.FIRST_SLIDE_VALUE);
    } else {
      this.showSlide(this.state.currentSlide + 1);
    }
  }

  prevSlide() {
    if (this.state.currentSlide === this.FIRST_SLIDE_VALUE) {
      this.showSlide(this.LAST_SLIDE_VALUE);
    } else {
      this.showSlide(this.state.currentSlide - 1);
    }
  }

  render() {
    return this.buildSlider();
  }
}

export default ReactiveSlider;