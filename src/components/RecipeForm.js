import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../css/typography.css';
import './recipeForm.css';
import { createRecipe } from '../actions/recipeActions';

class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      ingredients: [],
      steps: [],
      img: '',
      video: '',
      difficulty: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    /** Add a Validation method
     *  Check if each input is an string
     *  Check that that ingredients is comma separated
     *  Check that img and video URLs are valid
     **/

    const recipe = {
      id: this.state.id,
      name: this.state.name,
      ingredients: this.state.ingredients.includes(',')
        ? this.state.ingredients.split(',')
        : [''],
      steps: this.state.steps.includes(',')
        ? this.state.steps.split(',')
        : [''],
      img: this.state.img,
      video: this.state.video,
      difficulty: this.state.difficulty
    };

    this.props.createRecipe(recipe, this.props.user.authToken);
  };

  render() {
    return (
      <div>
        <h1 className="h1-title">Add Recipe</h1>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form__input">
            <label className="form__label">Name</label>
            <input
              className="form__textInput"
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <div className="form__input">
            <label className="form__label">Ingredients</label>
            <input
              className="form__textInput"
              type="text"
              name="ingredients"
              placeholder="Ingredient 1, Ingredient 2, ..."
              onChange={this.onChange}
              value={this.state.ingredients}
            />
          </div>
          <div className="form__input">
            <label className="form__label">Steps</label>
            <input
              className="form__textInput"
              type="text"
              name="steps"
              placeholder="Step 1, Step 2, ..."
              onChange={this.onChange}
              value={this.state.steps}
            />
          </div>
          <div className="form__input">
            <label className="form__label">Img URL</label>
            <input
              className="form__textInput"
              type="text"
              name="img"
              placeholder="Image URL"
              onChange={this.onChange}
              value={this.state.img}
            />
          </div>
          <div className="form__input">
            <label className="form__label">Video URL</label>
            <input
              className="form__textInput"
              type="text"
              name="video"
              placeholder="Video URL"
              onChange={this.onChange}
              value={this.state.video}
            />
          </div>
          <div className="form__input">
            <label className="form__label">Difficulty</label>
            <input
              className="form__textInput"
              type="text"
              name="difficulty"
              placeholder="Difficulty"
              onChange={this.onChange}
              value={this.state.difficulty}
            />
          </div>
          <div>
            <button type="submit" className="form__submit">
              {'Submit'}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

RecipeForm.propTypes = {
  createRecipe: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { createRecipe }
)(RecipeForm);
