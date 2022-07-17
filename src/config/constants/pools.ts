import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'CAKE',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x883abe4168705d2e5da925d28538b7a6aa9d8419',
    contractAddress: {
      80001: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      137: '0xF23053191FcA049f04926dBb108F86Cc61A4F77D',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://pancakeswap.finance/',
    harvest: false,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 1,
    tokenName: 'WBTC',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x883abe4168705d2e5da925d28538b7a6aa9d8419',
    contractAddress: {
      80001: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      137: '0x974c9c59701548aC6832d715F36839fCE60159B6',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '0.00000023',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 8,
  },
  {
    sousId: 2,
    tokenName: 'USDC',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x883abe4168705d2e5da925d28538b7a6aa9d8419',
    contractAddress: {
      80001: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      137: '0x046758b9f645d76915c5D5077638C829D14c2050',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '0.000122',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 6,
  },
  // {
  //   sousId: 3,
  //   tokenName: 'YORK',
  //   stakingTokenName: QuoteToken.YORK,
  //   stakingTokenAddress: '0x80244c2441779361f35803b8c711c6c8fc6054a3',
  //   contractAddress: {
  //     80001: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     137: '0x648130bb69bc8FD3E277a2Ed342B9ece1be2DC81',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '0.006853',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
]

export default pools
