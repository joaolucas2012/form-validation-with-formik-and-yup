import React from 'react';
import './App.css';

import { Signup } from './components/Signup';
import rocketImage from './assets/rocketImage.png';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImage} alt="rocket"/>
        </div>
      </div>
    </div>
  );
}

export default App;
