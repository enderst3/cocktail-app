import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='header'>
        <h1>Cocktail Search App</h1>
        </div>
        <div id='searchBar'>
          <h3>Enter a Drink Name:</h3>
          <input id='drink_input' placeholder='Enter Drink...'/>
          <button>Search</button>
        </div>
        <div id='results'></div>
      </div>
    );
  }
}

export default App;
