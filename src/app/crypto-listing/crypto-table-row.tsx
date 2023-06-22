import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { CryptocurrencyType } from './types';

type CryptoTablePropsType = {
  cryptocurrency: CryptocurrencyType
}

const CryptoTableRow = ({ cryptocurrency }: CryptoTablePropsType) => (
  <TableRow
    key="key"
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
    <TableCell component="th" scope="row">
      {cryptocurrency.name}
    </TableCell>
    <TableCell align="right">{cryptocurrency.quote.USD.price}</TableCell>
    <TableCell align="right">{cryptocurrency.quote.USD.market_cap}</TableCell>
    <TableCell align="right">{cryptocurrency.quote.USD.volume_24h}</TableCell>
  </TableRow>)

export default CryptoTableRow