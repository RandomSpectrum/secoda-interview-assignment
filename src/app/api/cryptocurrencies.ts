import axios from 'axios';

export const getCryptocurrencies = () => axios.get('http://localhost:3001/cryptocurrencies')