import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './web/scenes/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={createBrowserHistory()}>
          <Route exact path='/' component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
