import { createStyles, makeStyles, useScrollTrigger, Zoom } from '@material-ui/core'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew'
import WorkIcon from '@material-ui/icons/Work'
import BuildIcon from '@material-ui/icons/Build'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import LinkIcon from '@material-ui/icons/Link'
import LanguageIcon from '@material-ui/icons/Language'
import MenuIcon from '@material-ui/icons/Menu'
import type { Theme } from '@material-ui/core'
import React, { useState } from 'react'
import type { FC } from 'react'
import { SpeedDial, SpeedDialAction } from '@material-ui/lab'
import useIntl from '../hooks/useIntl'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    speedDialRoot: {
      transform: 'translateZ(0px)',
      flexGrow: 1,
    },
    fabStyle: {
      backgroundColor: 'rgb(145, 134, 114)',
      '&:hover': {
        backgroundColor: 'rgb(145 134 114 / 80%)',
      },
    },
    speedDial: {
      position: 'absolute',
      '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
      },
    },
  }),
)

const SpeedDialAnimation: FC = ({ children }) => {
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <Zoom in={trigger}>
      <div role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

const SpeedialMenuButton = () => {
  const { t } = useIntl()
  const menuItems = [
    { icon: <LanguageIcon />, name: t('speed_dial_language_tooltip'), actionType: 'language' },
    { icon: <LinkIcon />, name: t('speed_dial_link_tooltip'), actionType: '#links' },
    { icon: <EmojiPeopleIcon />, name: t('speed_dial_personal_tooltip'), actionType: '#personal' },
    { icon: <BuildIcon />, name: t('speed_dial_tech_tooltip'), actionType: '#tech' },
    { icon: <WorkIcon />, name: t('speed_dial_job_tooltip'), actionType: '#job' },
    { icon: <AccessibilityNewIcon />, name: t('speed_dial_welcome_tooltip'), actionType: '#welcome' },
  ]
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, actionType: string) => {
    if (actionType === 'language') {
      console.log('language toggled')
    } else {
      const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
        actionType,
      )

      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <SpeedDialAnimation>
      <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.speedDial}
        classes={{
          fab: classes.fabStyle,
        }}
        icon={<MenuIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="up"
      >
        {
          menuItems.map((item) => (
            <SpeedDialAction
              key={item.name}
              icon={item.icon}
              tooltipTitle={item.name}
              onClick={(e) => handleClick(e, item.actionType)}
            />
          ))
        }
      </SpeedDial >
    </SpeedDialAnimation>
  )
}

export default SpeedialMenuButton
