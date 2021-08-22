import { createStyles, makeStyles, useScrollTrigger, Zoom, Fab } from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import type { Theme } from '@material-ui/core'
import React from 'react'
import type { FC } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
)


const ScrollTop: FC = ({ children }) => {
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#welcome',
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

const ScrollToTopButton = () => {
  return (
    <ScrollTop>
      <Fab color="primary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  )
}

export default ScrollToTopButton
