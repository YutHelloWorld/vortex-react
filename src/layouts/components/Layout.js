import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './Layout.scss'
import CustomHome from '../containers/CustomHomeContainer'

import PrivateRoute from 'components/PrivateRoute'
import Login from 'routes/Login'

export default function Layout() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute component={CustomHome} />
    </Switch>
  )
}
