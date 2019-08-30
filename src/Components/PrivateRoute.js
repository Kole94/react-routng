import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import {Comp2} from './Comp2'
import {fakeAuth} from '../Controller/index'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Comp2 {...props} />
        : <Redirect to='/comp1' />
    )} />
  )