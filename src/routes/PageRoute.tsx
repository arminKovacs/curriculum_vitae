import React from 'react'
import { Box } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import { ParallaxBannerImage, ScrollToTopButton, LanguageChangeButton } from '../components'
import StyledDivider from '../components/StyledDivider'
import JobExperiences from './JobExperiences/JobExperiences'
import Links from './Links/Links'
import Personal from './Personal/Personal'
import TechExperience from './TechExperience/TechExperience'
import WelcomePage from './WelcomePage/WelcomePage'

const PageRoute = () => {

  return (
    <Switch>
      <Route exact path="/">
        <ParallaxBannerImage />
        <LanguageChangeButton />

        <Box my={2} />

        <WelcomePage />
        <StyledDivider flip />
        <StyledDivider />

        <JobExperiences />

        <StyledDivider flip />
        <StyledDivider />

        <TechExperience />

        <StyledDivider flip />
        <StyledDivider />

        <Personal />
        <StyledDivider flip />
        <StyledDivider />

        <Links />
        <StyledDivider flip />

        <ScrollToTopButton />
      </Route>
    </Switch>
  )
}

export default PageRoute

