import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Recipes from './components/Recipes';
import RecipeForm from './components/RecipeForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <h4>Made with ♥ from Torcy, FR</h4>
          </header>
          <RecipeForm />
          <hr />
          <Recipes />
        </div>
      </Provider>
    )
  }
}

export default App;
