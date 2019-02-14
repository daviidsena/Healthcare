import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Login from '../components/login/Login'
import Home from '../components/template/Home'
import Users from '../components/template/Users'
import Employee from '../components/template/Employee'
import Medical from '../components/template/Medical'


/**
 * 
 * No parametro component no Route é direcionado o caminho para
 * o component que será renderizado. 
 * 
 */

export default props =>

    <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/home' component={Home} />
            <Route path='/users' component={Users} />
            <Route path='/employee' component={Employee} />
            <Route path='/medical' component={Medical} />
            <Redirect from='*' to='/' />
    </Switch>