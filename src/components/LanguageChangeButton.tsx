import { Fab, makeStyles, createStyles } from '@material-ui/core'
import type { Theme } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    leftButton: {
      bottom: theme.spacing(95),
      right: theme.spacing(7),
      position: 'fixed',
      color: 'white',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    rightButton: {
      bottom: theme.spacing(95),
      right: theme.spacing(3),
      position: 'fixed',
      color: 'white',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  }),
)

const LanguageChangeButton = () => {
  const classes = useStyles()

  return (
    <>
      <Fab
        size="small"
        aria-label="change to EN language"
        className={classes.leftButton}
      >
        EN
      </Fab>
      <Fab
        size="small"
        aria-label="change to HU language"
        className={classes.rightButton}
      >
        HU
      </Fab>
    </>
  )
}

export default LanguageChangeButton
