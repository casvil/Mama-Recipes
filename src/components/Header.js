import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  routerNewRecipe,
  routerHome,
  routerSignIn,
  routerRegister
} from '../actions/routerActions';
import { signOut } from '../actions/userActions';

import logo from './logo.svg';
import './header.css';

class Header extends Component {
  render() {
    const { isRegistered, isLoggedIn } = this.props.user;

    return isLoggedIn ? (
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
        <div>
          <span
            className="header__item"
            role="button"
            onClick={this.props.routerNewRecipe}
          >
            NEW RECIPE
          </span>
        </div>
        <div>
          <span
            className="header__item"
            role="button"
            onClick={this.props.signOut}
          >
            Sign Out
          </span>
        </div>
      </header>
    ) : (
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
        <span>
          {isRegistered ? (
            ''
          ) : (
            <span
              className="header__item"
              role="button"
              onClick={this.props.routerRegister}
            >
              Register
            </span>
          )}
        </span>

        <span>
          {isLoggedIn ? (
            ''
          ) : (
            <span
              className="header__item"
              role="button"
              onClick={this.props.routerSignIn}
            >
              Login
            </span>
          )}
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  routerNewRecipe: PropTypes.func.isRequired,
  routerHome: PropTypes.func.isRequired,
  routerSignIn: PropTypes.func.isRequired,
  routerRegister: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { routerHome, routerNewRecipe, routerSignIn, routerRegister, signOut }
)(Header);
