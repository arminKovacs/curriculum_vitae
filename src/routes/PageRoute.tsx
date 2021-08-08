import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WelcomePage from './WelcomePage/WelcomePage'

const PageRoute = () => {
  return (
    <Switch>
      <Route exact path="/">
        <WelcomePage />
      </Route>
    </Switch>
  )
}

export default PageRoute

