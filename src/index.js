import React from 'react';
import './reactive-slider.css';

class ReactiveSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: props.slides,
      timeToShow: props.timeToShow || 3,
      currentSlide: 0
    };

    this.FIRST_SLIDE_VALUE = 0;
    this.LAST_SLIDE_VALUE = this.state.slides.length - 1;

    this.dots = null;
    this.autoplayTimer = null;
    this.init();
  }

  init() {
    this.dotsHandle(this.state.currentSlide);
    this.setupAutoplay();
  }

  buildSlider() {
    if (!this.state.slides || !this.state.slides instanceof Array) { return <div><p>Slides not present</p></div> }

    let startingSwipePosition;

    return (
      <div id="reactive-slider-container">
        <div id="reactive-slider">
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
            &nbsp; { this.dots } &nbsp;
            <span className="reactive-slider-control-button" onClick={() => this.nextSlide()}>
          &#9655;
        </span>
          </div>
        </div>
      </div>

    );
  }

  setupAutoplay() {
    clearInterval(this.autoplayTimer);

    this.autoplayTimer = setInterval(() => {
      this.nextSlide();
    }, this.state.timeToShow * 1000);
  }

  dotsHandle(index) {
    this.dots = this.state.slides.map((slide, i) => {
      return i === index
        ? <li className="reactive-slider-dot" key={i} onClick={() => this.showSlide(i) }>
          &nbsp;&#9679;&nbsp;
        </li>
        : <li className="reactive-slider-dot" key={i} onClick={() => this.showSlide(i) }>
          &nbsp;&#9675;&nbsp;
        </li>;
    });
  }

  showSlide(index) {
    this.setState({
      ...this.state,
      currentSlide: index
    });

    this.setupAutoplay();
    this.dotsHandle(index);
  }

  nextSlide() {
    if (this.state.currentSlide === this.LAST_SLIDE_VALUE) {
      this.dotsHandle(this.FIRST_SLIDE_VALUE);

      this.setState({
        ...this.state,
        currentSlide: this.FIRST_SLIDE_VALUE
      });
    } else {
      this.dotsHandle(this.state.currentSlide + 1);

      this.setState({
        ...this.state,
        currentSlide: this.state.currentSlide + 1
      });
    }

    this.setupAutoplay();
  }

  prevSlide() {
    if (this.state.currentSlide === this.FIRST_SLIDE_VALUE) {
      this.dotsHandle(this.LAST_SLIDE_VALUE);

      this.setState({
        ...this.state,
        currentSlide: this.LAST_SLIDE_VALUE
      });
    } else {
      this.dotsHandle(this.state.currentSlide - 1);

      this.setState({
        ...this.state,
        currentSlide: this.state.currentSlide - 1
      });
    }

    this.setupAutoplay();
  }

  render() {
    return this.buildSlider();
  }
}

export default ReactiveSlider;