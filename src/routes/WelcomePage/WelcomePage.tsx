import { Box, Button, createStyles, Grid, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'react-scroll'
import React from 'react'

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonStyle: {
      color: 'white',
    },
  }))

const WelcomePage = () => {
  const classes = useStyles()

  return (
    <div style={{ height: 1000 }} id="welcome">
      <Typography variant="h3">
        Welcome to my site!
      </Typography>
      <Box my={1} />
      <Grid container justifyContent="center">
        <Grid item>
          <Button className={classes.buttonStyle}>
            <Link to="job" spy smooth>
              Job Experiences
            </Link>
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyle}>
            <Link to="tech" spy smooth>
              Used technologies
            </Link>
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyle}>
            <Link to="personal" spy smooth>
              Personal information
            </Link>
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyle}>
            <Link to="links" spy smooth>
              Links
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default WelcomePage
