import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCryptocurrencies } from '../api/cryptocurrencies';
import { CryptocurrenciesType } from './types';

type initialState = {
  cryptocurrencies: CryptocurrenciesType
}

const initialState = {
  cryptocurrencies: []
}

export const fetchCryptocurrencies = createAsyncThunk('/cryptocurrencies', async () => (
  getCryptocurrencies().then((response) => response.data.data)
))

export const cryptoListingSlice = createSlice({
  name: 'cryptoListing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCryptocurrencies.fulfilled, (state, action) => {
      state.cryptocurrencies = action.payload
    })
  }
})

export default cryptoListingSlice.reducer