import React from 'react'
import { Router, Switch } from 'react-router-dom'
import PublicRoute from './public-route'
import languages from '../languages'

import Landing from '../pages/landing'
import NotFound from '../pages/not-found'

const createRoutes = (store) => {
  let routes = []
  
  Object.keys(languages).forEach((locale) => {
    const props = {
      store,
      locale,
    }

    routes = routes.concat([
      <PublicRoute key={`${locale}-home-route`} {...props} exact path={`/${locale}`} component={Landing} />,
    ])
  })

  return routes
}

const routes = (history, store) => (
  <Router history={history}>
    <Switch>
      <PublicRoute exact path="/" component={Landing} />,
      {createRoutes(store)}
      <PublicRoute exact path="*" component={NotFound} />,
    </Switch>
  </Router>
)

export default routes
