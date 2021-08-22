import { Box } from '@material-ui/core'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ParallaxBannerImage } from '../components'
import TechExperience from './TechExperience/TechExperience'
import WelcomePage from './WelcomePage/WelcomePage'

const PageRoute = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ParallaxBannerImage />
        <Box my={2} />
        <WelcomePage />
        <TechExperience />
      </Route>
    </Switch>
  )
}

export default PageRoute

