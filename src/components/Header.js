import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Button, Alignment } from '@blueprintjs/core';

import { signOut } from '../actions/authActions';

class Header extends Component {
  renderLinks() {
    if (this.props.auth.authenticated) {
      return (
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>
              <Link to="/">Mama Recipes</Link>
            </Navbar.Heading>
            <Navbar.Divider />
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <Link to="/recipe">
              <Button className="bp3-minimal" icon="add" text="New recipe" />
            </Link>
            <Link to="/signout" onClick={this.props.signOut}>
              <Button className="bp3-minimal" icon="log-out" text="Sign out" />
            </Link>
          </Navbar.Group>
        </Navbar>
      );
    } else {
      return (
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>
              <Link to="/">Mama Recipes</Link>
            </Navbar.Heading>
            <Navbar.Divider />
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <Link to="/signup">
              <Button className="bp3-minimal" icon="user" text="Sign Up" />
            </Link>
            <Link to="/signin">
              <Button className="bp3-minimal" icon="log-in" text="Sign In" />
            </Link>
          </Navbar.Group>
        </Navbar>
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
