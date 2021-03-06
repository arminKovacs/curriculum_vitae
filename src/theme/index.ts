import { createTheme } from '@material-ui/core'

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Urbanist"',
      'sans-serif',
    ].join(','),
    h3: {
      textAlign: 'center',
    },
    allVariants: {
      color: 'white',
    },
  },
})

export default theme
