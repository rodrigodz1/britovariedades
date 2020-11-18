import React from 'react';
import { BrowserRouter, Route, Switch, useHistory, useLocation } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import Register from './pages/register';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>  
    );
}