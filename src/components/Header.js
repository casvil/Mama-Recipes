import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { signOut } from '../actions/authActions';

import './header.css';

class Header extends Component {
  renderLinks() {
    if (this.props.auth.authenticated) {
      return (
        <header className="header">
          <Link to="/" className="header__title">
            <h1>Mama Recipes</h1>
          </Link>
          <Link to="/recipe" className="header__item">
            <h1>New Recipe</h1>
          </Link>
          <Link
            className="header__item"
            to="/signout"
            onClick={this.props.signOut}
          >
            <h1>Signout</h1>
          </Link>
        </header>
      );
    } else {
      return (
        <header className="header">
          <Link to="/" className="header__title">
            <h1>Mama Recipes</h1>
          </Link>
          <Link to="/signup" className="header__item">
            <h1>Sign Up</h1>
          </Link>
          <Link to="/signin" className="header__item">
            <h1>Sign In</h1>
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
