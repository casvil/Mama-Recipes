import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          Login
          <div>
            <label>Email</label>
            <Field name="email" component="input" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" component="input" />
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'login' })(Login);
