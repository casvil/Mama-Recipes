import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  routerNewRecipe,
  routerHome,
  routerLogin,
  routerRegister
} from '../actions/routerActions';

import logo from './logo.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1
          className="header__title"
          role="button"
          onClick={this.props.routerHome}
        >
          <img src={logo} className="header__logo" alt="logo" />
          Welcome to React{' '}
          <span role="img" aria-label="pasta">
            🍝
          </span>{' '}
          Recipes
        </h1>
        <span
          className="header__item"
          role="button"
          onClick={this.props.routerNewRecipe}
        >
          NEW RECIPE
        </span>
        <span
          className="header__item"
          role="button"
          onClick={this.props.routerRegister}
        >
          Register
        </span>
        <span
          className="header__item"
          role="button"
          onClick={this.props.routerLogin}
        >
          Log In
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  routerNewRecipe: PropTypes.func.isRequired,
  routerHome: PropTypes.func.isRequired,
  routerLogin: PropTypes.func.isRequired,
  routerRegister: PropTypes.func.isRequired
};

export default connect(
  null,
  { routerHome, routerNewRecipe, routerLogin, routerRegister }
)(Header);
