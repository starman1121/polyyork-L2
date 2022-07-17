import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 3,
    lpSymbol: 'GOLDYORK-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x324d2194c6958f54c9ac86947f415fbf59e2cdcd',
    },
    tokenSymbol: 'GOLDYORK',
    tokenAddresses: {
      80001: contracts.cake[80001],
      137: contracts.cake[137],
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    exchange:"QuickSwap"
  },
  {
    pid: 12, 
    risk: 3,
    lpSymbol: 'GOLDYORK-YORK',
    lpAddresses: {
      80001: '',
      137: '0xc4299218dda4af0faf0d07c21e52b9b29b5a5a57',
    },
    tokenSymbol: 'GOLDYORK',
    tokenAddresses: {
      80001: contracts.cake[80001],
      137: contracts.cake[137],
    },
    quoteTokenSymbol: QuoteToken.YORK,
    quoteTokenAdresses: contracts.york
  },
  {
    pid: 13, 
    risk: 3,
    lpSymbol: 'GOLDYORK-MATIC',
    lpAddresses: {
      80001: '',
      137: '0xd6bbef7d7f6e81b0c25e0b9f36aace8988b0a36b', 
    },
    tokenSymbol: 'GOLDYORK',
    tokenAddresses: {
      80001: contracts.cake[80001],
      137: contracts.cake[137],
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'GOLDYORK-POLYDOGE LP',
    lpAddresses: {
      80001: '',
      137: '0x75A32aD868edA43b1a3E5deE8BACA935293aA69C',
    },
    tokenSymbol: 'POLYDOGE',
    tokenAddresses: {
      80001: contracts.polydoge[80001],
      137: contracts.polydoge[137],
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    exchange:"QuickSwap"
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'GOLDYORK-DMA LP',
    lpAddresses: {
      80001: '',
      137: '0x2816adaa4e6d08fe51565f6df5713c12383d1829',
    },
    tokenSymbol: 'DMA',
    tokenAddresses: {
      80001: contracts.dma[80001],
      137: contracts.dma[137],
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    exchange:"QuickSwap"
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'YORK-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x9346bea9a8ecc94aa1df3612abc868456506c523',
    },
    tokenSymbol: 'YORK',
    tokenAddresses: {
      80001: contracts.york[80001],
      137: contracts.york[137],
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    exchange:"QuickSwap"
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'AAVE-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x7c76b6b3fe14831a39c0fec908da5f17180df677',
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      80001: contracts.aave[80001],
      137: contracts.aave[137],
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    exchange:"QuickSwap"
  },
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'WETH-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      80001: contracts.weth[80001],
      137: contracts.weth[137],
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    exchange:"QuickSwap"
  },
  {
    pid: 6, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'GOLDYORK',
    lpAddresses: {
      80001: '',
      137: '0x324d2194c6958f54c9ac86947f415fbf59e2cdcd', 
    },
    tokenSymbol: 'GOLDYORK',
    tokenAddresses: {
      80001: '',
      137: '0xbf583F12b9AFA44d86A0cc61A858473371B0677D', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    pid: 7, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'YORK',
    lpAddresses: {
      80001: '',
      137: '0x9346bea9a8ecc94aa1df3612abc868456506c523', 
    },
    tokenSymbol: 'YORK',
    tokenAddresses: {
      80001: '',
      137: '0x21de43d96cfddd203da3352545e0054534776652', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    pid: 8, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DMA',
    lpAddresses: {
      80001: '',
      137: '0x0dE9EEc2210787f18FA87984C90BAA54E37e7057', 
    },
    tokenSymbol: 'DMA',
    tokenAddresses: {
      80001: '',
      137: '0x54a71fc88302372bc22abe75b0d3522bf16f8173', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    pid: 9, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'POLYDOGE',
    lpAddresses: {
      80001: '',
      137: '0x7b3E67E63906d8576466c2f48158A30be0a9e36c', 
    },
    tokenSymbol: 'POLYDOGE',
    tokenAddresses: {
      80001: '',
      137: '0x8a953cfe442c5e8855cc6c61b1293fa648bae472', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    pid: 10, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WETH',
    lpAddresses: {
      80001: '',
      137: '0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d', 
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      80001: '',
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    pid: 11, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
    lpAddresses: {
      80001: '',
      137: '0xF6a637525402643B0654a54bEAd2Cb9A83C8B498', 
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      80001: '',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    pid: 14, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      80001: '',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      80001: '',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    pid: 15, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      80001: '',
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      80001: '',
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt
  },
  {
    pid: 16, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'AAVE',
    lpAddresses: {
      80001: '',
      137: '0x7c76B6B3FE14831A39C0fec908DA5f17180df677', 
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      80001: '',
      137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
]

export default farms
