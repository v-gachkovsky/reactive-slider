# Reactive Slider
Reactive Slider is slider component for React

## How to use

You can use slider in your React App:

```
render() {
    return (
      <ReactiveSlider
        slides={this.state.slides}
      />
    );
  }
```

`this.state.slides` contains array of images
Also you can use `timeToShow` prop which takes a number of seconds:

```
render() {
    return (
      <ReactiveSlider
        slides={this.state.slides}
        timeToShow={5}
      />
    );
  }
```
Each slide will be shown 5 seconds
Default value is 3 seconds