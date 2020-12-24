
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import color from '../../themes/font-colors/TextColor'
import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import theme from '../../themes/styled-components/ComponentTheme'
import media from '../../themes/media-query/Device'
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
    root: {
      background: 'transparent',
      color: 'white',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
      expanded: {},
    }
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
        background: 'transparent',
        padding: '0',
        margin: '0',
        minHeight: 12,
        fontSize: 15,
        '&$expanded': {
          minHeight: 12,
        },
      },
      content: {
        margin: '0'
      },
      expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
        background: 'transparent',
        height: '100vh'
    }
  }))(MuiAccordionDetails);

const Logo = styled.div`
    margin-left: 5rem;
    text-align: center;
    justify: center;
`;

const Div = styled.div`
    height: 1080px;
    width: 100%;
    background: ${theme.sidebar.background};
    text-align: center;

    @media ${media.desktop} {
        display: block;
    }
`;

const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    font-size: 1rem;
    height: 100%;

    li {
        text-align: left;
        color: ${color.default.white};
        padding: 0.8rem;
    }

    li:hover {
        background-color: ${color.hover.primaryHover}
    }

    .dropdown {
        padding-left: 3rem !important;
    }

    .dropdown:hover {
        background-color: ${color.hover.primaryHover}
    }
`;

function MobileNavbar() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    return (
        <AppBar color="primary" style = {{ background: '#131A2A'}}>
            <ToolBar>
                <IconButton style = {{ color: 'white'}}>
                  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <MenuIcon>
                        </MenuIcon>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Ul>
                            <li> Personal Trainers </li>
                            <li className = "dropdown"> List </li>
                            <li className = "dropdown"> For Verification </li>
                            <li> Trainees </li>
                            <li> Subscriptions </li>
                            <li> Rates </li>
                            <li> Sessions </li>
                            <li> Workout Categories </li>
                            <li> Payments  </li>
                            <li> Incident Reports  </li>
                        </Ul>
                    </AccordionDetails>
                  </Accordion>
                  <Logo>
                  </Logo>
                </IconButton>
            </ToolBar>
        </AppBar>
    );
  }
  
  export default MobileNavbar;