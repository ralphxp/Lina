import React, { Component } from 'react';

import signupForm from './signupForm';
import LoginForm from './LoginForm';
import Verify from './Verify';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class Form extends Component{
  
  render ()
  {
    return (
      <Router>
        <main className='main'>
          <Switch>
              <Route path='/register' exact component={signupForm} />
              <Route path='/login' exact component={LoginForm} />
              <Route path='/password_reset' exact component={Verify} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default Form;
