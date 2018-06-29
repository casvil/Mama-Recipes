import React, { Component } from 'react';

import requireAuth from './requireAuth';

class Signout extends Component {
  render() {
    return <div>Sorry to see you go!</div>;
  }
}

export default requireAuth(Signout);
