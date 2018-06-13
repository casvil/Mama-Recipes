import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchRecipes, resetSearch } from '../actions/recipeActions';
import Suggestions from './Suggestions';
import './search.css';

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
        } else {
          this.props.resetSearch();
        }
      }
    );
  };

  isSuggestionsActive = () => {
    if (this.state.query.length > 0) return true;
    else return false;
  };

  render() {
    return (
      <div className="search">
        <form className="search__form">
          <input
            className="search__input"
            placeholder="Search for ..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <Suggestions
            active={this.isSuggestionsActive()}
            suggestions={this.props.suggestions}
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  searchRecipes: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  suggestions: state.recipes.suggestions
});

export default connect(
  mapStateToProps,
  { searchRecipes, resetSearch }
)(Search);
