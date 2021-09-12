import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme'
import PageRoute from './routes/PageRoute'
import { ParallaxCache } from './components'
import IntlProvider from './components/IntlProvider'

const App = () => (
  <ThemeProvider theme={theme}>
    <ParallaxProvider>
      <ParallaxCache />
      <BrowserRouter>
        <IntlProvider>
          <PageRoute />
        </IntlProvider>
      </BrowserRouter>
    </ParallaxProvider>
  </ThemeProvider >
)

export default App
