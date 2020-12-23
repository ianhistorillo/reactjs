// Sidebar component
import React from 'react'
import logo from '../../images/logo.png'
import styled from "styled-components";
import theme from '../../themes/styled-components/ComponentTheme'
import media from '../../themes/media-query/Device'
import color from '../../themes/font-colors/TextColor'
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
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
        background: 'transparent'
    }
  }))(MuiAccordionDetails);

const Div = styled.div`
    height: 1080px;
    width: 100%;
    background: ${theme.sidebar.background};
    text-align: center;
    display: none;

    @media ${media.desktop} {
        display: block;
    }
`;

const Ul = styled.ul`
    list-style-type: none;
    padding-left: 0;

    li {
        text-align: left;
        color: ${color.default.white};
        padding: 0.8rem;
    }

    li:hover {
        background-color: ${color.hover.primaryHover}
    }

    .dropdown {
        padding: 0.8rem !important;
    }

    .dropdown:hover {
        background-color: ${color.hover.primaryHover}
    }
`;

export default function Sidebar() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    return (
        <Div>
            <img src = {logo} alt = "logo" width = "100%" />
            
            <Ul>
                <li> 
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography> Personal Trainers </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            <li className = "dropdown"> List </li>
                            <li className = "dropdown"> For Verification </li>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </li>
                <li> Trainees </li>
                <li> Subscriptions </li>
                <li> Rates </li>
                <li> Sessions </li>
                <li> Workout Categories </li>
                <li> Payments  </li>
                <li> Incident Reports  </li>
            </Ul>
        </Div>
    );
  }
