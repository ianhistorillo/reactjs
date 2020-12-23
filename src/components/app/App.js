// App Base

import '../../themes/styles/App.css';
import React from 'react';
import theme from '../../themes/styled-components/MuiTheme'

import { ThemeProvider } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Sidebar from '../navbar/Sidebar'
import MobileNav from '../navbar/MobileNavbar'
import DashboardContent from '../dashboard/Dashboard'

import media from '../../themes/media-query/Device'
import styled from "styled-components";

const Mobile = styled.div`
    display: block;
    margin-bottom: 2rem;

    @media ${media.tablet} {
      display: none;
    }

    @media ${media.desktop} {
        display: none;
    }
`;

// Dashboard

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
          <Sidebar />
          <Mobile>
            <MobileNav />
          </Mobile>
        </Grid>
        <Grid item xs={12} sm={10}>
          <DashboardContent />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
