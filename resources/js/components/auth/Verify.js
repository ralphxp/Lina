import React, { Component } from 'react';
import axios from 'axios';
import {Link} from  'react-router-dom';


class Verify extends Component{

  state = {
    phone : '',
  }

  handleData = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submitData = async (e) =>{
    e.preventDefault();
    
    const resp = await axios.post('/verify', this.state);

    console.log(resp)

    // if(resp.status == 204)
    // {
      
    //   window.location=('/home');
    // }

  }

  render ()
  {
    return (
      
      <div className="container form-container" style={{overflow:'hidden'}}>
        <div className="sign">
            <div className="info"><h1>Welcome Back</h1></div>
            <form onSubmit={this.submitData}>
                
                <div className="form-grousigninFormp m1-2">
                    <label htmlFor="phone">Mobile</label>
                    <input type="tel" name="mobile" className="form-control" required={true} onChange={this.handleData} value={this.state.mobile} />
                </div>

                <div className=" mt-2 submit-flex">
                    <button type="submit" className="btn">Send Code</button>
                    <Link to="/login" title="New user..? register now" className="mt-2">Login</Link>
                </div>

            </form>
        </div>
      </div>
    );
  }
}

export default Verify;
