import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import requireAuth from '../../helpers/requireAuth';
import { createRecipe } from '../../actions/recipeActions';

import '../../css/typography.css';
import './recipeForm.css';

class RecipeForm extends Component {
  onSubmit = e => {
    e.preventDefault();

    /** Add a Validation method
     *  Check if each input is an string
     *  Check that that ingredients is comma separated
     *  Check that img and video URLs are valid
     **/

    this.props.createRecipe(
      this.props.form.recipe.values,
      this.props.auth.authenticated
    );
  };

  render() {
    return (
      <div>
        <h1 className="h1-title">Add Recipe</h1>
        <form className="form">
          <div className="form__input">
            <label className="form__label">Name</label>
            <Field
              type="text"
              component="input"
              className="form__textInput"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="form__input">
            <label className="form__label">Ingredients</label>
            <Field
              type="text"
              component="input"
              className="form__textInput"
              placeholder="Ingredient 1, Ingredient 2, ..."
              name="ingredients"
            />
          </div>
          <div className="form__input">
            <label className="form__label">Steps</label>
            <Field
              className="form__textInput"
              component="input"
              type="text"
              name="steps"
              placeholder="Step 1, Step 2, ..."
            />
          </div>
          <div className="form__input">
            <label className="form__label">Img URL</label>
            <Field
              className="form__textInput"
              component="input"
              type="text"
              name="img"
              placeholder="Image URL"
            />
          </div>
          <div className="form__input">
            <label className="form__label">Video URL</label>
            <Field
              className="form__textInput"
              component="input"
              type="text"
              name="video"
              placeholder="Video URL"
            />
          </div>
          <div className="form__input">
            <label className="form__label">Difficulty</label>
            <Field
              className="form__textInput"
              component="input"
              type="text"
              name="difficulty"
              placeholder="Difficulty"
            />
          </div>
          <div>
            <button
              type="submit"
              className="form__submit"
              onClick={this.onSubmit}
            >
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
  auth: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  form: state.form
});

export default reduxForm({
  form: 'recipe'
})(
  connect(
    mapStateToProps,
    { createRecipe }
  )(requireAuth(RecipeForm))
);
