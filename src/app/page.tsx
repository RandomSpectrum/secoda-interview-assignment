'use client';
import { Provider } from 'react-redux';
import store from './store';
import { Box } from '@mui/material';
import CryptoListing from "./crypto-listing/crypto-listing"

const Home = () => (
  <Provider store={store}>
    <main >
      <Box mt={6}>
        <CryptoListing />
      </Box>
    </main>
  </Provider>
)

export default Home

