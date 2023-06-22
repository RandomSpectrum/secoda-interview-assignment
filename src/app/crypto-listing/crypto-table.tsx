import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import CryptoTableRow from './crypto-table-row';
import Paper from '@mui/material/Paper';
import { useAppSelector } from '../store'
import { CryptocurrencyType } from './types';
import colors from '../common/colors';

const CryptoTable = () => {
  const cryptocurrencies = useAppSelector((state) => state.cryptoListing.cryptocurrencies)

  return (
    <TableContainer
      component={Paper}
      style={{ border: `1px solid ${colors.tableBorder}`, borderRadius: 3 }}
    >
      <Table aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell align="right"><strong>Price</strong></TableCell>
            <TableCell align="right"><strong>Marketcap</strong></TableCell>
            <TableCell align="right"><strong>Volume (24H)</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cryptocurrencies.map((cryptocurrency: CryptocurrencyType) => (<CryptoTableRow key={cryptocurrency.name} cryptocurrency={cryptocurrency} />))}
        </TableBody>
      </Table>
    </TableContainer>)
}

export default CryptoTable