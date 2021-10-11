import React from "react";
import axios from "axios";

export default class Side extends React.Component{


    state = {
      user : []
    }

    async componentDidMount(e){
        const resp = await axios.get('/user/profile');
        
        if(resp.data.status == 202)
        {
            
            this.setState({
              user :resp.data.user
            });
          
        }
    }

    SubmitEvent = (e) =>{
        const form = document.querySelector('form');

        form.submit()
    }

    handleLogout = async (e) =>{
        e.preventDefault();
        const resp = await axios.post('/logout');

        if(resp){
            window.location.reload();
        }
    }


    render (){
        return (
            <aside className="sidebar" >
                
                <div className="upper-nav profile">
                    <a href="#" title="close" className="close">&times;</a>
                    <div className="avatar">
                        <div className="avatar-img" style={{backgroundImage:'url(/drawables/img7.jpg)'}}></div>
                        <div className="avatar-info">
                            <div className="avatar-name text-lowercase text-italic">@{this.state.user.username}</div>
                            <div className="avatar-mobile"><a href="tel:+234{this.state.user.mobile}">+234{this.state.user.mobile}</a></div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="nav-menu">
                    <div className="item col"><i className="fa fa-sm fa-users"></i> Contacts</div>
                    <div className="item col"><i className="fa fa-sm fa-phone"></i> Calls</div>
                    <div className="item col"><i className="fa fa-sm fa-map-marked"></i> People Nearby</div>
                    <div className="item col"><i className="fa fa-sm fa-archive"></i> Saved Messages</div>
                    <div className="item col"><i className="fa fa-cogs"></i> Settings</div>
                    <hr />
                    <div className="item col"><i className="fa fa-sm fa-user-plus"></i> Invite Friends</div>
                    <div className="item col"><i className="fa fa-sm fa-book"></i> Help</div>
                    <hr />
                    <form onSubmit={this.handleLogout}>
                        <button type='submit' className='btn-sm item link col w-full' action="#logout">
                        <div className="item col" onClick={this.SubmitEvent}><i className="fas fa-sm fa-lock text-danger"></i> Logout</div>
                    </button></form>
                </div>
                <hr />
                <div className="sidebar-footer">
                    <div className="item col"><i className="fa fa-sm fa-money-bill"></i> Donate to Lina</div>
                </div>

            </aside>
        );
    }
}