import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: "#000000",
        light: '#3c44b126'
      },
      secondary: {
        main: "#2679ff",
        light: '#f8324526'
      },
      inherit: {
        main: "#ffffff",
        light: '#ffffff'
      }
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