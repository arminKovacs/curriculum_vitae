import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-scroll'

const WelcomePage = () => {

  return (
    <div style={{ height: '1000px' }}>
      <Typography variant="h1" style={{ textAlign: 'center' }}>
        Welcome to my site!
      </Typography>
      <Link
        to="tech"
        spy
        smooth
      >
        scroll to tech experience
      </Link>

    </div>
  )
}

export default WelcomePage
