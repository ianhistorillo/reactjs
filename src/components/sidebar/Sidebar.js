// Sidebar component
import React from 'react'
import logo from '../../images/logo_hf.png'
import styled from "styled-components";
import theme from '../../themes/styled-components/ComponentTheme'
import media from '../../themes/media-query/Device'

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

const sidebar = () => {
    return (
        <Div>
            <img src = {logo} alt = "logo" width = "50%" />
        </Div>
    )
}

export default sidebar;
