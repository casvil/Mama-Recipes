import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authRequest } from '../../actions/authActions';

class Signout extends Component {
  render() {
    return <div>Sorry to see you go!</div>;
  }
}

export default connect(
  null,
  { authRequest }
)(Signout);
