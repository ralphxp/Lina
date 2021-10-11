import React from "react";
import { Link } from "react-router-dom";

export default class Top extends React.Component{

    render (){
			return (
				<div className="top-nav">
					<div className="nav-item side-nav-toggle">
							<div className="icon-dot">
									<i className="dot dot-1x"></i>
									<i className="dot dot-1x"></i>
									<i className="dot dot-1x"></i>
							</div>
					</div>


				
					<div className="nav-item search-icon" ><i className="fa fa-lg fa-search"></i></div>
					
					
					
				</div>
			);
    }

}