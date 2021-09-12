import { Box, Button, createStyles, Grid, Grow, makeStyles, Typography, useScrollTrigger } from '@material-ui/core'
import { Link } from 'react-scroll'
import useIntl from '../../hooks/useIntl'
import type { FC } from 'react'
import image from '../../assets/me.jpg'

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonStyle: {
      color: 'white',
    },
    containerStyle: {
      margin: 'auto',
      width: '80%',
      alignItems: 'center',
    },
    imageStyle: {
      width: '50%',
      height: 'auto',
      [theme.breakpoints.down('md')]: {
        width: '70%',
      },
    },
  }))

const TextAnimation: FC = ({ children }) => {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 250,
  })

  return (
    <Grow in={trigger}>
      <div role="presentation">
        {children}
      </div>
    </Grow>
  )
}

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

      <Box my={6}>
        <Grid item container justifyContent="flex-end" className={classes.containerStyle} spacing={2}>

          <Grid item xs={12} sm={3}>
            <TextAnimation>
              <Typography style={{ textAlign: 'center' }}>
                {t('welcome_intro_text_name')}
              </Typography>
              <Box my={2}>
                <Typography style={{ textAlign: 'center' }}>
                  {t('welcome_intro_text')}
                </Typography>
              </Box>
            </TextAnimation>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextAnimation>
              <div>
                <img src={image} className={classes.imageStyle} />
              </div>
            </TextAnimation>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default WelcomePage
