// App Base

import '../../themes/styles/App.css';
import React from 'react';
import theme from '../../themes/styled-components/Theme'

import { ThemeProvider } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Sidebar from '../sidebar/Sidebar'
import Table from '../table/Table'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Table />
        </Grid>
      </Grid>
    </ThemeProvider>
    
  );
}

export default App;
