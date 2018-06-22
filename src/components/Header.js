import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { routerNewRecipe, routerHome } from '../actions/routerActions';

import logo from './logo.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <h1
          className="header__title"
          role="button"
          onClick={this.props.routerHome}
        >
          Welcome to React{' '}
          <span role="img" aria-label="pasta">
            🍝
          </span>{' '}
          Recipes
        </h1>
        <span role="button" onClick={this.props.routerNewRecipe}>
          NEW RECIPE
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  routerNewRecipe: PropTypes.func.isRequired,
  routerHome: PropTypes.func.isRequired
};

export default connect(
  null,
  { routerHome, routerNewRecipe }
)(Header);
