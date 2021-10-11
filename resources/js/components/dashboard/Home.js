import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends React.Component{
   
    render (){
        return (
            <div className="fetch-user " >
                <div className="thumbnail open-viewer" toggle-item=".viewer-1" style = {{ backgroundImage : "url('/drawables/img5.jpg')" }} >
                    <div className="view-user">
                        <a href="#"><i className="fa fa-heart"></i><br /><small style={{color: 'var(--lina-c1)'}}>10k</small></a>
                        <a href="#"><i className="fa fa-eye"></i><br /> <small style={{color: 'var(--lina-c1)'}}>5k</small></a>
                    </div>
                </div>
                <div className="view-modal viewer-1 ">
                    <div className="viewer">
                        <button className="close-viewer "><i className="fa fa-times"></i></button>
                        <div className="view-image" style={{ backgroundImage: "url('/drawables/img5.jpg')" }}></div>
                        <div className="btn-group">
                            <button className="btn"><i className="fa fa-heart"></i></button>
                            <button className="btn"><i className="fa fa-star"></i></button>
                            <button className="btn"><i className="fa fa-envelope"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}