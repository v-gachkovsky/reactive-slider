import React from 'react';
class ReactiveSlider extends React.Component {
  render() {
    if (!this.props.slides) { return <div><p>Slides not present</p></div> }
    const slides = this.props.slides.map((slide, index) => {
      return <div className="slide" key={index}>
        <img src={slide}/>
      </div>
    });

    return (
      <div>
        <h4>Reactive-Slider</h4>
        <div id="reactive-slider">
          {slides}
        </div>
      </div>
    );
  }
}
export default ReactiveSlider;