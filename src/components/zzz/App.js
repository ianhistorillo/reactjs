import '../../themes/styles/App.css';
import React from 'react';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'black',
    padding: '5px 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 12
    }
  }
})

function ButtonStlyed() {
  const classes = useStyles();
  return <Button className={classes.root}> Test Styled Button </Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
      control={
        <Checkbox
        checked={checked}
        icon={<DeleteIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'arial-label': 'secondary checkbox'
        }}
      />
      }
      label = "Testing Checkbox"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="App">
          <header className="App-header">

          <AppBar color="secondary">
            <ToolBar>
              <IconButton>
                <MenuIcon>
                  <Typography variant="h6">
                    MUI Theming
                  </Typography>
                  <Button>
                    Login
                  </Button>
                </MenuIcon>
              </IconButton>
            </ToolBar>
          </AppBar>

          <Typography variant="h2" component="div">
            Welcome MUI
          </Typography>
          <Typography variant="body1">
            Learn how to use Material UI
          </Typography>
          <ButtonStlyed />

          <Grid container spacing={2} justify="center">
            <Grid item xs={3} sm={6}>
              <Paper style={{ height:75, width: '100%'}} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height:75, width: '100%'}} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height:75, width: '100%'}} />
            </Grid>
          </Grid>

          <TextField
            variant="outlined" 
            color="secondary"
            type="email"
            label="The time"
          />
          <CheckboxExample />
          <ButtonGroup>
            <Button
              startIcon={<SaveIcon />} 
              size = "large"
              style = {{
                fontSize: 24
              }}
              variant = "contained" 
              color = "primary">
              SAVE
            </Button>
            <Button
              startIcon={<DeleteIcon />} 
              size = "large"
              style = {{
                fontSize: 24
              }}
              variant = "contained" 
              color = "secondary">
              Discard
            </Button>
          </ButtonGroup>
          </header>
        </div>
      </Container>
      
    </ThemeProvider>
    
  );
}

export default App;
