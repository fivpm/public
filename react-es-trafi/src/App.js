import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import PageOneContent from './Components/PageOneContent';
import PageTwoContent from './Components/PageTwoContent';
import PageThreeContent from './Components/PageThreeContent';

import { BrowserRouter as Router, Route} from 'react-router-dom';

//console.log(traficodes);

class App extends Component {

 
  render() {

    return (
      <div className="App" >
      <Router>
        <Header/>
        <Route exact path="/" render={() => (<PageOneContent/>)} />
        <Route exact path="/another" render={() => (<PageTwoContent/>)} />
        <Route exact path="/third" render={() => (<PageThreeContent/>)} />
      </Router></div>
    );
  }
}

export default App;