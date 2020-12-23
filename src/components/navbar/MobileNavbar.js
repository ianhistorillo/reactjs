import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import color from '../../themes/font-colors/TextColor'
import styled from "styled-components";

const Logo = styled.div`
    margin-left: 5rem;
    text-align: center;
    justify: center;
`;

function MobileNavbar() {
    return (
        <AppBar color="primary" style = {{ background: '#131A2A'}}>
            <ToolBar>
                <IconButton style = {{ color: 'white'}}>
                  <MenuIcon>
                  </MenuIcon>
                  <Logo>
                  </Logo>
                </IconButton>
            </ToolBar>
        </AppBar>
    );
  }
  
  export default MobileNavbar;