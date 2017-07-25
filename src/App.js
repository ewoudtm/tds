import React, { Component } from 'react';
import './App.css';
import PhonesList from './containers/phonesList'
import PlansList from './containers/plansList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Title">
          <h2>Top 10 Popular Phones</h2>
        </div>
        <div className="Container">
          <PhonesList />
          <PlansList />
        </div>
      </div>
    );
  }
}

export default App;
