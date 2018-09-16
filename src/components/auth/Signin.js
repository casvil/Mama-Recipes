import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button,
  FormGroup,
  InputGroup,
  Tooltip,
  Classes,
  Position
} from '@blueprintjs/core';

import { authRequest, signIn } from '../../actions/authActions';
import { routerHome } from '../../actions/routerActions';
import validate from '../../helpers/validate';

// the following function deconstructs the received params and renders
// an input with props and if some parameters are true displays an span
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

class Signin extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.authRequest(this.props.form.signIn.values.email);
    this.props.signIn(this.props.form.signIn.values, () => {
      this.props.routerHome();
    });
  };
  render() {
    return (
      <div className="padded-X">
        <h2>Sign In into Mama Recipes!</h2>
        <div className="form padded-Y">
          <form>
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
            <Button type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

Signin.propTypes = {
  signIn: PropTypes.func.isRequired,
  routerHome: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  form: state.form
});

export default reduxForm({ form: 'signIn', validate })(
  connect(
    mapStateToProps,
    { authRequest, signIn, routerHome }
  )(Signin)
);
