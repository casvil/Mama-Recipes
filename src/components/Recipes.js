import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchRecipes } from '../actions/recipeActions';

class Recipes extends Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  render() {
    const recipeItems = this.props.recipes.map(recipe => (
      <div key={ recipe.id }>
        <h3>{ recipe.name }</h3>
      </div>
    ));

    return (
      <div>
        <h1>Recipes</h1>
        { recipeItems }
      </div>
    )
  }
}

Recipes.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
  newRecipe: PropTypes.object
}

const mapStateToProps = state => ({
  // recipesReducer is called recipes in combineRecuders
  recipes: state.recipes.items,
  newRecipe: state.recipes.item
})

export default connect(mapStateToProps, { fetchRecipes })(Recipes);
