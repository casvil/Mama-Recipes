import React, { Component } from 'react';
import { Route } from 'react-router';

import Components from './helpers/routed-components';

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
          <Route path="/" component={Components.Home} />
          <Route path="/signup" component={Components.Signup} />
          <Route path="/signin" component={Components.Signin} />
          <Route path="/signout" component={Components.Signout} />
          <Route path="/" component={Components.RecipeList} />
          <Route path="/recipe" component={Components.RecipeForm} />
          <Route path="/recipe/:name" component={Components.Recipe} />
        </div>
        <div className="app__footer">
          <Route path="/" component={Components.Footer} />
        </div>
      </div>
    );
  }
}

export default App;
