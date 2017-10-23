# Reactive Slider
Reactive Slider is slider component for React

## How to Example start

Install dependencies:
```
npm install
```
Make build:
```
npm run build
```
Go to `example` folder and open `index.html` in browser

You can use slider in your App:

```
ReactDOM.render(
  <ReactiveSlider slides={slides}/>,
  document.getElementById('some-div-id')
);
```

`slides` contains array of images URLs   
Also you can use `timeToShow` prop which takes a number of seconds:

```
ReactDOM.render(
  <ReactiveSlider slides={slides} timeToShow={5}/>,
  document.getElementById('some-div-id')
);
```  
Each slide will be shown 5 seconds
Default value is 3 seconds  
See `example/index.html`