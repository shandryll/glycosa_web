import React, { Suspense, lazy } from 'react'
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"

import './assets/scss/style.scss'

// Login Page
const Login = lazy(() => import('./views/Login/Login'))

// Statistic Page
const Statistic = lazy(() => import('./views/Statistic/Statistic'))

function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Statistic} />
          <Route path='/sign-in' component={Login} />
          <Route path='/statistic' component={Statistic} />
          <Redirect from='*' to='/' />
        </Switch>
      </HashRouter>
    </Suspense>
  )
}

export default Routes
