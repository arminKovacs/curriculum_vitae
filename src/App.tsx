import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme'
import PageRoute from './routes/PageRoute'
import { ParallaxCache } from './components'

const App = () => (
  <ThemeProvider theme={theme}>
    <ParallaxProvider>
      <ParallaxCache />
      <BrowserRouter>
        <PageRoute />
      </BrowserRouter>
    </ParallaxProvider>
  </ThemeProvider >
)

export default App
