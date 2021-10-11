import React, {Component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class BottomNav extends Component{

    handleLogout = async (e) =>{
      e.preventDefault()
      const resp = await axios.post('/logout')
      if(resp){
          window.location.reload()
      }
    }
    render (){
        return (
          
          <div className="bottom-nav">
            <div className="nav-item link open-cam toggle-cam" action="#cam"><a href="#cam"><i className="fa  fa-camera fa-lg"></i></a>
                
            </div>
            <a href="#messages" ><div className="nav-item link" action="#messenger"><i className="fa   fa-envelope fa-lg"></i></div></a>
            <a href="#home"><div className="nav-item link active" action="#home"><i className="fa  fa-home fa-lg"></i></div></a>
            <a href="#match"><div className="nav-item link " action="#match"><i className="fa  fa-heart fa-lg"></i></div></a>
            <a href="#settings"><div className="nav-item link " action="#match"><i className="fa  fa-user-alt fa-lg"></i></div></a>
            {/* <div className="nav-item more-toggle" action="#more"><a href="#settings">
                <div className="icon-dot">
                    <i className="dot dot-1x"></i>
                    <i className="dot dot-1x"></i>
                    <i className="dot dot-1x"></i>
                </div></a>

                <div className="more-settings">
                    <a href="#match"><div className="item link col" action="#me"><i className="fa fa-user"></i> Account</div></a>
                    <a href="#match"><div className="item link col" action="#settings"><i className="fa fa-cogs"></i> Settings</div></a>
                    <form onSubmit={this.handleLogout}>
                        
                        <button type='submit' className='btn-sm item link col w-full text-danger' action="#logout">
                            <i className="fa fa-lock"></i> Logout
                        </button>
                    </form>
                </div>
            </div> */}
            
          </div> 
        );
    }
}
