import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Form from './auth/Form';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
  
function Main(){
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path="/login" exact component={Form} />
          <Route path="/register" exact component={Form}  />
        </Switch>
      </div>
    </Router>
  )
}

export default Main;

if(document.querySelector('#renderer')){

  ReactDOM.render(<Main />, document.querySelector('#renderer'));

}
