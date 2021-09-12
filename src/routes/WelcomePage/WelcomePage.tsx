import { Box, Button, createStyles, Grid, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'react-scroll'
import useIntl from '../../hooks/useIntl'
import React from 'react'

const useStyles = makeStyles(() =>
  createStyles({
    buttonStyle: {
      color: 'white',
    },
  }))

const WelcomePage = () => {
  const classes = useStyles()
  const { t } = useIntl()

  return (
    <div style={{ height: 1000 }} id="welcome">
      <Typography variant="h3">
        {t('welcome_title')}
      </Typography>
      <Box my={1} />
      <Grid container justifyContent="center">
        <Grid item>
          <Button className={classes.buttonStyle}>
            <Link to="job" spy smooth>
              {t('job_xp_button_label')}
            </Link>
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyle}>
            <Link to="tech" spy smooth>
              {t('technologies_button_label')}
            </Link>
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyle}>
            <Link to="personal" spy smooth>
              {t('personal_info_button_label')}
            </Link>
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyle}>
            <Link to="links" spy smooth>
              {t('links_button_label')}
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default WelcomePage
