describe('Crypto listing', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: 'http://localhost:3001/cryptocurrencies',
      },
      { fixture: 'cryptocurrencies.json' }
    ).as('getCryptocurrencies')
  })
  it('shows the first cryptocurrency', () => {
    cy.visit('localhost:3000')

    cy.get('[data-cy="crypto-table-row-name"]').first().contains('cpz18y7zf24')
    cy.get('[data-cy="crypto-table-row-price"]').first().contains('0.1401944141886451')
    cy.get('[data-cy="crypto-table-row-market-cap"]').first().contains('0.005807254994772748')
    cy.get('[data-cy="crypto-table-row-volume-24h"]').first().contains('2807')
  })
})