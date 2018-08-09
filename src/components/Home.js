import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return this.props.authenticated ? (
      <div>Welcome user!</div>
    ) : (
      <div>
        <div>Welcome to Mama Recipes</div>
        <div>A place to learn and create recipes</div>
        <ul>
          <li>Create, Edit and Share your own Recipes</li>
          <li>Watch online videos to Learn more</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Home);
