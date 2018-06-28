import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { signOut } from '../actions/userActions';

import logo from './logo.svg';
import './header.css';

class Header extends Component {
  componentWillMount() {
    console.log(this.props);
    // const { isRegistered, isLoggedIn } = this.props.auth;
    // console.log('ISREGISTERED, ISLOGGEDIN', isRegistered, isLoggedIn);
  }

  renderLinks() {
    if (this.props.isLoggedIn) {
      return (
        <header>
          <Link to="/">
            <h1 className="header__title">Mama Recipes</h1>
          </Link>
          <Link to="/recipe">
            <h1 className="header__item">New Recipe</h1>
          </Link>
          <Link to="/signout" onClick={this.props.signOut}>
            <h1 className="header__item">Signout</h1>
          </Link>
        </header>
      );
    } else {
      return (
        <header>
          <Link to="/">
            <h1 className="header__title">Mama Recipes</h1>
          </Link>
          <Link to="/signup">
            <h1 className="header__item">Sign Up</h1>
          </Link>
          <Link to="/signin">
            <h1 className="header__item">Sign In</h1>
          </Link>
        </header>
      );
    }
  }

  render() {
    return this.renderLinks();
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { signOut }
)(Header);
