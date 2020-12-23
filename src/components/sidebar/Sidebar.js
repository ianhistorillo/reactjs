// Sidebar component
import React from 'react'
import logo from '../../images/logo.png'
import styled from "styled-components";
import theme from '../../themes/styled-components/ComponentTheme'
import media from '../../themes/media-query/Device'
import color from '../../themes/font-colors/TextColor'

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

    li {
        text-align: left;
        margin-bottom: 2rem;
        color: ${color.default.white};
    }

    .dropdown {
        margin-left: 1rem;

    }
`;

const sidebar = () => {
    return (
        <Div>
            <img src = {logo} alt = "logo" width = "100%" />
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
        </Div>
    )
}

export default sidebar;
