import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: "#fff",
        light: '#3c44b126'
      },
      secondary: {
        main: "#2679ff",
        light: '#f8324526'
      },
      background: {
        default: "#f4f5fd"
      },
    },
    overrides: {
      MuiAppBar: {
        root: {
          transform: 'translateZ(0)'
        }
      }
    },
    props: {
      MuiIconButton: {
        disableRipple: true
      }
    },
    typography: {
      allVariants: {
        color: "#000000"
      },
    },
  })


export default theme;