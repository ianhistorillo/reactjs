//
import { createMuiTheme } from '@material-ui/core/styles'

// This is for the Material UI component theming
const theme = createMuiTheme({
    typography: {
      h2: {
        fontSize: 36,
        marginBottom: 12
      },
      h6: {
        marginTop: 20
      }
    }
})

export default theme;
