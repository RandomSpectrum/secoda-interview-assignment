import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { CryptocurrencyType } from './types';
import CryptoRank from './crypto-rank';

type CryptoTablePropsType = {
  cryptocurrency: CryptocurrencyType
}

const CryptoTableRow = ({ cryptocurrency }: CryptoTablePropsType) => (
  <TableRow key="key" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
    <TableCell data-cy="crypto-table-row-price" align="right">
      <CryptoRank rank={cryptocurrency.cmc_rank} />
    </TableCell>
    <TableCell data-cy="crypto-table-row-name" component="th" scope="row">
      {cryptocurrency.name}
    </TableCell>
    <TableCell data-cy="crypto-table-row-price" align="right">${(cryptocurrency.quote.USD.price).toFixed(4)}</TableCell>
    <TableCell data-cy="crypto-table-row-market-cap" align="right">${cryptocurrency.quote.USD.market_cap.toFixed(4)}</TableCell>
    <TableCell data-cy="crypto-table-row-volume-24h" align="right">${cryptocurrency.quote.USD.volume_24h}</TableCell>
  </TableRow>)

export default CryptoTableRow