import { useEffect } from 'react';
import CryptoTable from './crypto-table'
import { useAppDispatch } from '../store'
import { fetchCryptocurrencies } from './slice';

const FETCH_CRYPTOCURRENCIES_INTERVAL = 1000 * 60

const CryptoListing = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCryptocurrencies())

    setInterval(() => {
      dispatch(fetchCryptocurrencies())
    }, FETCH_CRYPTOCURRENCIES_INTERVAL);
  }, []);

  return (<CryptoTable />)
}

export default CryptoListing