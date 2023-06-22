export type CryptocurrencyType = {
  cmc_rank: number
  name: string
  quote: {
    USD: {
      price: number
      market_cap: number,
      volume_24h: number
    }
  }
}

export type CryptocurrenciesType = CryptocurrencyType[]