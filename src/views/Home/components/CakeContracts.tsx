import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeContracts = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeContracts = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);

  let eggPerBlock = 0;
  if(farms && farms[0] && farms[0].eggPerBlock){
    eggPerBlock = new BigNumber(farms[0].eggPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeContracts>
      <CardBody>
        <Heading size="xl" mb="24px">
          Contracts
        </Heading>
        <Row>
          <Text fontSize="12px">Master Chef</Text>
          <Text bold fontSize="12px">0x9b50925E496DD137fB77Dd61Cb08cE7f1717e43D</Text>
        </Row>
        <Row>
          <Text fontSize="12px">GoldYork</Text>
          <Text bold fontSize="12px">0xbf583F12b9AFA44d86A0cc61A858473371B0677D</Text>
        </Row>
        <Row>
          <Text fontSize="12px">Timelock</Text>
          <Text bold fontSize="12px">0x470da22b2a2b000da08b8bd8b75d38b0cd3a2e79</Text>
        </Row>
      </CardBody>
    </StyledCakeContracts>
  )
}

export default CakeContracts
