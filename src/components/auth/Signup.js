import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import {
  Button,
  FormGroup,
  InputGroup,
  Tooltip,
  Classes,
  Position
} from '@blueprintjs/core';

import { authRequest, signUp } from '../../actions/authActions';
import { routerHome } from '../../actions/routerActions';
import validate from '../../helpers/validate';

import '../../css/layout.css';

const renderInput = ({ input, meta, label, type }) => {
  return (
    <FormGroup label={label} labelFor={`text-input-${label}`} inline={true}>
      <Tooltip
        autoFocus={false}
        className={Classes.TOOLTIP_INDICATOR}
        content={<span>Required!</span>}
        position={Position.RIGHT}
        isOpen={meta.error && meta.touched}
      >
        <InputGroup
          type={type}
          {...input}
          id={`text-input-${label}`}
          placeholder={label}
        />
      </Tooltip>
    </FormGroup>
  );
};

class SignUp extends Component {
  handleClick = event => {
    event.preventDefault();

    this.props.authRequest(this.props.form.signUp.values.email);
    this.props.signUp(this.props.form.signUp.values, () =>
      this.props.routerHome()
    );
  };
  render() {
    return (
      <div className="padded-X">
        <h2>Sign Up into Mama Recipes!</h2>
        <div className="form padded-Y">
          <form autocomplete="false">
            <Field
              name="email"
              type="email"
              label="Email"
              component={renderInput}
            />
            <Field
              name="password"
              type="password"
              label="Password"
              autoComplete="none"
              component={renderInput}
            />
            <Button type="submit" onClick={this.handleClick}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  routerHome: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  form: state.form
});

export default reduxForm({
  form: 'signUp',
  validate
})(
  connect(
    mapStateToProps,
    { authRequest, signUp, routerHome }
  )(SignUp)
);
