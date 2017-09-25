import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './Layout.scss'
import CustomHome from './CustomHome'

import PrivateRoute from 'components/PrivateRoute'
import Login from 'routes/Login'

export default function Layout() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/" component={CustomHome} />
    </Switch>
  )
}
