import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CryptoCurrencies = () =>
(
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell><strong>Name</strong></TableCell>
          <TableCell align="right"><strong>Price</strong></TableCell>
          <TableCell align="right"><strong>Marketcap</strong></TableCell>
          <TableCell align="right"><strong>Volume</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow
          key="key"
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            Ethereum
          </TableCell>
          <TableCell align="right">$23,000</TableCell>
          <TableCell align="right">$398,349,342</TableCell>
          <TableCell align="right">$23,434,234</TableCell>
        </TableRow>

      </TableBody>
    </Table>
  </TableContainer>
)

export default CryptoCurrencies