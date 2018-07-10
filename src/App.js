import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Level from './components/Level/Level';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      polygon: {
        nb_sides: 7
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      }
    }
  },
  "retina_detect": true
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Level />
        <ImageLinkForm />
        {
          // 
          // 
          // <FaceRecognition />
        }
      </div>
    );
  }
}

export default App;
