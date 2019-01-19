import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Resume from './pages/ResumePage';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={ Home } />
        <Route exact path='/resume' component={ Resume } />
      </div>
    );
  }
}

export default App;
