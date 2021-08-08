import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ParallaxImage } from '../components'
import WelcomePage from './WelcomePage/WelcomePage'

const PageRoute = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div style={{ height: '200vh' }}>
          <ParallaxImage />
          <div style={{ height: 50 }} />
          <WelcomePage />
          <h2>Next text</h2>
        </div>
      </Route>
    </Switch>
  )
}

export default PageRoute

