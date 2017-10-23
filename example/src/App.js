import React, { Component } from 'react';
import ReactiveSlider from 'reactive-slider';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        'https://upload.wikimedia.org/wikipedia/commons/b/b1/34-Moneda-extranjera-ahorro-fuerte-740x400.jpg',
        'https://mumsdotravel.com/wp-content/uploads/2015/07/Inntel-hotel-Zaandam-Holland.-Image-courtesy-of-Inntel.-740x400.jpeg',
        'http://mongoliagrowthgroup.com/wp/wp-content/uploads/sub_mongrowth-740x400.jpg',
        'http://www.albdreams.net/wp-content/uploads/2017/05/DSC_0443-740x400.jpg'
      ]
    }
  }

  render() {
    
    return (
      <div className="App">
        <h1 className="App-intro">
          Reactive Slider Demo App
        </h1>
        {<ReactiveSlider 
          slides={this.state.slides}
        />}
      </div>
    );
  }
}

export default App;
