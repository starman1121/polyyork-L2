import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Layered Farming',
    icon: 'LayerIcon',
    items: [
      {
        label: 'Layer 1 - YORK',
        href: 'https://york.polyyork.finance/',
      },
      {
        label: 'Layer 2 - GOLDYORK',
        href: 'https://gold.polyyork.finance/',
      },
    ],
  },
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0xbf583F12b9AFA44d86A0cc61A858473371B0677D',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/ETH/0xbf583F12b9AFA44d86A0cc61A858473371B0677D',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Dividends',
  //   icon: 'BondsIcon',
  //   href: '/pools',
  // },
  {
    label: 'Referral',
    icon: 'CommunityIcon',
    href: '/referral',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Chart',
        href: 'https://polygon.poocoin.app/tokens/0xbf583f12b9afa44d86a0cc61a858473371b0677d/',
      },
      {
        label: 'VFAT Tools',
        href: 'https://vfat.tools/polygon/polyyork2/',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/polygon/defi/golden-york',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/golden-york',
      },
      {
        label: 'CoinCost',
        href: 'https://coincost.net/en/currency/golden-york',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.polyyork.farm/',
      },
      // {
      //   label: 'Whitepaper',
      //   href: 'https://gold.polyyork.finance/files/polyyorkWhitepaper.pdf',
      // },
      {
        label: 'GitHub',
        href: 'https://github.com/PolyYork-Finance',
      },
      
      // {
      //   label: 'Blog',
      //   href: '#',
      // },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  {
    icon: 'RoadmapIcon',
    label: 'Whitepaper',
    href: 'https://gold.polyyork.finance/files/polyyorkWhitepaper.pdf',
  },
  {
    icon: 'AuditIcon',
    label: 'Audit by TechRate',
    href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/August/Golden%20York.pdf',
  },
  // {
    //   label: 'Review by RugDoc',
    //   icon: 'AuditIcon',
    //   href: 'https://rugdoc.io/project/polyyork/ ',
    // },
    // {
      //   label: 'Audit by CertiK',
      //   icon: 'AuditIcon',
      //   href: 'https://certik.org/projects/goose-finance',
      // },
]

export default config
