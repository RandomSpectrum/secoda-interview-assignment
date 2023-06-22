import { useEffect } from 'react';
import CryptoTable from './crypto-table'
import { useAppDispatch } from '../store'
import { fetchCryptocurrencies } from './slice';

const FETCH_CRYPTOCURRENCIES_INTERVAL = 1000 * 60

const CryptoListing = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchCryptocurrencies())
    }, FETCH_CRYPTOCURRENCIES_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (<CryptoTable />)
}

export default CryptoListing