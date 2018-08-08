import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Recipe } from './recipe/Recipe';
import { fetchRecipesRequest, fetchRecipes } from '../actions/recipeActions';
import '../css/typography.css';
import './recipes.css';

class Recipes extends Component {
  componentWillMount() {
    this.props.fetchRecipesRequest();
    this.props.fetchRecipes();
  }

  render() {
    const recipeItems = Object.keys(this.props.recipes).map((recipe, key) => (
      <Recipe key={key} recipe={this.props.recipes[recipe]} />
    ));

    return (
      <div className="recipes">
        <h1 className="h1-title">Recipes</h1>
        <div className="recipes__body">{recipeItems}</div>
      </div>
    );
  }
}

Recipes.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  fetchRecipesRequest: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
  newRecipe: PropTypes.object
};

const mapStateToProps = state => ({
  // recipeReducer is called recipes in combineRecuders
  recipes: state.recipes.items,
  newRecipe: state.recipes.item
});

export default connect(
  mapStateToProps,
  { fetchRecipesRequest, fetchRecipes }
)(Recipes);
