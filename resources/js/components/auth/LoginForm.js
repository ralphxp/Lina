import React, { Component } from 'react';
import axios from 'axios';
import {Link} from  'react-router-dom';
import Linert from '../../linaAlerts'

class LoginForm extends Component{

  state = {
    mobile : '',
    password : ''
  }

  handleData = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submitData = async (e) =>{
    e.preventDefault();
    const alrt = new Linert({})
    alrt.loader()
    const resp = await axios.post('/login', this.state);

   

    if(resp.status >= 200 && resp.status <= 210)
    {
      // alrt.kill()
      window.location=('/home');
    }

  }

  render ()
  {
    return (
      
      <div className="container form-container" style={{overflow:'hidden'}}>
        <div className="sign">
            <div className="info"><h1>Welcome Back</h1></div>
            <form onSubmit={this.submitData}>
                
                <div className="form-group m1-2">
                    <label htmlFor="phone">Mobile</label>
                    <input type="tel" name="mobile" className="form-control" required={true} onChange={this.handleData} value={this.state.mobile} />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="phone">Password</label>
                    <input type="password" name="password" onChange={this.handleData} value={this.state.password} className="form-control" required={true} />
                    <Link to="/password_reset" className="forgot-password">Forgot Password</Link>
                </div>

                <div className=" mt-2 submit-flex">
                    <button type="submit" className="btn">Login</button>
                    <Link to="/register" title="New user..? register now" className="mt-2">New user.? register now</Link>
                </div>

            </form>
        </div>
        <div className="alt-login mt-3">
            <div className="alt-head">
                <div className="line"></div>
                <div className="text">Login with</div>
                <div className="line"></div>
            </div>
            <div className="alt-body">
                <div className="alt-app"><i className="fab text-primary fa-3x fa-facebook"></i></div>
                <div className="alt-app"><i className="fab text-danger fa-3x fa-google-plus"></i></div>
            </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
