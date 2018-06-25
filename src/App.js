import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import Components from './components/routed-components';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <Route path="/" component={Components.Header} />
        </div>
        <div className="app__form-search">
          <Route path="/" component={Components.Search} />
        </div>
        <div className="app__content">
          <Route path="/register" component={Components.UserRegister} />
          <Route path="/login" component={Components.Login} />
          <Route path="/recipe" component={Components.RecipeForm} />
          <Route path="/" component={Components.Recipes} />
        </div>
        <div className="app__footer">
          <Route path="/" component={Components.Footer} />
        </div>
      </div>
    );
  }
}

export default App;
