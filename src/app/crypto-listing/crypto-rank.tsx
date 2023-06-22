import { Avatar } from '@mui/material';
import colors from '../common/colors';

type CryptoRankPropsType = {
  rank: number
}

const CryptoRank = ({ rank }: CryptoRankPropsType) => (
  <Avatar
    style={{ backgroundColor: colors.rankBackground, borderRadius: 2, fontSize: 12, height: 36, width: 36 }}
  >
    {rank}
  </Avatar>
)

export default CryptoRank