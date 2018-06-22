import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './components/Recipes';
import RecipeForm from './components/RecipeForm';
import Search from './components/Search';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <div className="app">
          <div className="app__header">
            <Route path="/" component={Header} />
          </div>
          <div className="app__form-search">
            <Route path="/" component={Search} />
          </div>
          <div className="app__content">
            <Route path="/recipe" component={RecipeForm} />
            <Route path="/" component={Recipes} />
          </div>
          <div className="app__footer">
            <Route path="/" component={Footer} />
          </div>
        </div>
      </Switch>
    );
  }
}

export default App;
