import { Box } from '@material-ui/core'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ParallaxBannerImage, ParallaxImegaSideEnter } from '../components'
import WelcomePage from './WelcomePage/WelcomePage'

const PageRoute = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ParallaxBannerImage />
        <Box my={2} />
        <WelcomePage />
        <ParallaxImegaSideEnter xValues={[-90, 60]} />
      </Route>
    </Switch>
  )
}

export default PageRoute

