import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchRecipes } from '../actions/recipeActions';
import Suggestions from './Suggestions';

class Search extends Component {
  state = {
    query: ''
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          this.props.searchRecipes(this.state.query);
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for ..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions suggestions={this.props.suggestions} />
      </form>
    );
  }
}

Search.propTypes = {
  searchRecipes: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  suggestions: state.recipes.suggestions
});

export default connect(
  mapStateToProps,
  { searchRecipes }
)(Search);
