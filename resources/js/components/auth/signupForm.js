import React, { Component } from 'react';
import axios from 'axios';
import {Link} from  'react-router-dom';
import Linert from '../../linaAlerts'

class signupForm extends Component{
  
  state = {
    mobile : '',
    username : '',
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
    const resp = await axios.post('/register', this.state);

    if(resp.statusText === 'Created')
    {
      this.setState({
        mobile : '',
        username : '',
        password : ''
      });
      alrt.kill()
      this.props.history.push('/login');
    }

  }

  render ()
  {
    return (
      
      <div className="container form-container">
        <div className="sign">
            <form onSubmit={this.submitData}>
                <div className="form-group m1-2">
                    <label htmlFor="phone">Mobile</label>
                    <input type="tel" name="mobile" className="form-control" onChange={this.handleData} value={this.state.mobile} required={true} />
                </div>

                <div className="form-group m1-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" className="form-control" onChange={this.handleData} value={this.state.username} required={true} />
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="password">Password</label>

                    <input type="password" name="password" className="form-control" onChange={this.handleData} value={this.state.password} required={true} />
                    {/* <a href="#" className="forgot-password">Forgot Password</a> */}
                </div>

                <div className=" mt-2 submit-flex">
                    <button type="submit" className="btn">Register</button>
                    <Link to="/login" title="" className="mt-2">already have an  account</Link>
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

export default signupForm;
