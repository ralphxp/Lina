import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import BottomNav from '../nav/Bottom';
import Top from '../nav/Top';
import Side from '../nav/Side';
import Home from './Home';
import Profile from './profile';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

export default class Dashboard extends Component{
    render (){
        return (
            
            <Router>
                <Top />
                <Side />
                    <main className="main">
                        <Switch>
                            <Route path='/' component={Home} />
                            <Route path='/home' component={Home} />
                        </Switch>
                    </main>
                <BottomNav />
            </Router>
        );
    }
}