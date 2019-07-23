import Listings from './Components/Listings';
import Post from './Components/Post';

import React from 'react';

import './App.css';


function App(props) {
  return (
    <div className="wrapper">
          <div className="top">
              <h1>tConference</h1>
          </div>
          <div className="columns">
              <div className="left"> <Listings /></div>
              <div className="right"><Post /> </div>
          </div >
    </div>
  );
}

export default App;