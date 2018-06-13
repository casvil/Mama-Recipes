import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './components/Recipes';
import RecipeForm from './components/RecipeForm';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <div className="app__header">
            <Header />
          </div>
          <div className="app__form-search">
            <RecipeForm />
            <Search />
          </div>
          <Recipes />
          <div className="app__footer">
            <Footer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
