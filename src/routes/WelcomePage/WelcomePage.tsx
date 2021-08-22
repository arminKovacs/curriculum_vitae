import { Button, Typography } from '@material-ui/core'
import { Link } from 'react-scroll'
import React from 'react'

const WelcomePage = () => {
  return (
    <div style={{ height: 1000 }}>
      <Typography variant="h1" style={{ textAlign: 'center' }}>
        Welcome to my site!
      </Typography>
      <Button
        variant="outlined"
      >
        <Link to="tech" spy smooth>
          to tech
        </Link>
      </Button>
    </div>
  )
}

export default WelcomePage
