import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme(
  {
    "palette": {
      "common": {
        "black": "#000",
        "white": "#fff"
      }, "background": {
        "paper": "#fff",
        "default": "#fafafa"
      }, "primary": {
        "light": "rgba(144, 204, 244, 1)",
        "main": "rgba(93, 162, 213, 1)",
        "dark": "rgba(39, 117, 231, 1)",
        "contrastText": "#fff"
      }, "secondary": {
        "light": "rgba(119, 166, 247, 1)",
        "main": "rgba(59, 139, 235, 1)",
        "dark": "rgba(12, 61, 131, 1)",
        "contrastText": "#fff"
      }, "error": {
        "light": "#e57373",
        "main": "#f44336",
        "dark": "#d32f2f",
        "contrastText": "#fff"
      }, "text": {
        "primary": "rgba(0, 0, 0, 0.87)",
        "secondary": "rgba(0, 0, 0, 0.54)",
        "disabled": "rgba(0, 0, 0, 0.38)",
        "hint": "rgba(0, 0, 0, 0.38)"
      }
    }
  })
export default theme;