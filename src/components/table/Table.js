// Sidebar component
import React from 'react'
import 'fontsource-roboto';
import styled from "styled-components";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const Span = styled.span`
    text-decoration: underline;
    margin-right: 1rem; 
`;

function createData(lname, fname, mname, birthday, experiences, downloadablesCV, downloadablesCERT) {
  return { lname, fname, mname, birthday, experiences, downloadablesCV, downloadablesCERT};
}

const rows = [
  createData('Doe', 'John', '', '04/23/1992', 'Personal Trainer Golds Gym, 4Yr Sr Trainer iFitness First', 'CV', 'CERTIFICATE'),
  createData('Gullermo', 'Anastasia', '', '01/15/1991', '4Yr Senior Trainer in Fitness Facility', 'CV', 'CERTIFICATE'),
];

const table = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell> <Checkbox /> </StyledTableCell>
                        <StyledTableCell>LASTNAME</StyledTableCell>
                        <StyledTableCell>FIRSTNAME</StyledTableCell>
                        <StyledTableCell>MIDDLENAME</StyledTableCell>
                        <StyledTableCell>BIRTHDAY</StyledTableCell>
                        <StyledTableCell>AWARD/EXPERIENCES</StyledTableCell>
                        <StyledTableCell>DOWNLOADABLES</StyledTableCell>    
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.lname}>
                        <StyledTableCell> <Checkbox /> </StyledTableCell>
                        <StyledTableCell>
                            {row.lname}
                        </StyledTableCell>
                        <StyledTableCell>{row.fname}</StyledTableCell>
                        <StyledTableCell>{row.mname}</StyledTableCell>
                        <StyledTableCell>{row.birthday}</StyledTableCell>
                        <StyledTableCell>{row.experiences}</StyledTableCell>
                        <StyledTableCell>
                         <Span>{row.downloadablesCV}</Span>
                         <Span>{row.downloadablesCERT}</Span>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default table;
