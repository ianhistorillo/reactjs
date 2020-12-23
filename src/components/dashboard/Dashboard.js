// Sidebar component
import React from 'react'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Table from '../table/Table'
import ConfirmationModal from '../modal/ConfirmationModal'
import MUItheme from '../../themes/styled-components/MuiTheme'

const table = () => {
    return (
        <Container maxWidth="lg" theme={MUItheme}>
            <Typography variant="h6" component="div">
                PERSONAL TRAINER - FOR VERIFICATION
            </Typography>
            <ConfirmationModal />
            <Table />
        </Container>    
    );
}

export default table;