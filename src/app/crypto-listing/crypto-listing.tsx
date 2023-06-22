import { useEffect } from 'react';
import CryptoTable from './crypto-table'
import { useAppDispatch } from '../store'
import { fetchCryptocurrencies } from './slice';

const CryptoListing = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCryptocurrencies());
  }, [])

  return (<CryptoTable />)
}


export default CryptoListing