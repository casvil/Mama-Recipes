import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class UserRegister extends Component {
  render() {
    return (
      <div>
        <form>
          UserRegister
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

export default reduxForm({ form: 'register' })(UserRegister);
