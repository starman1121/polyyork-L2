import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    // background-image: url(/images/bg.jpg);
    background-image: ${({ theme }) => (theme.isDark ? 'url(/images/bg-dark.png)' : 'url(/images/bg.jpg)')};
    background-size: 100% 100%;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
