// Sidebar component
import React from 'react'
import 'fontsource-roboto';
import styled from "styled-components";
import Typography from '@material-ui/core/Typography'
import Table from '../table/Table'
import ConfirmationModal from '../modal/ConfirmationModal'

const Div = styled.div`
    padding-left: 10px;
    padding-right: 10px
`;

const dashboard = () => {
    return (
        <Div>
            <Typography variant="h6" component="div">
                PERSONAL TRAINER - FOR VERIFICATION
            </Typography>
            <ConfirmationModal />
            <Table />
        </Div>    
    );
}

export default dashboard;