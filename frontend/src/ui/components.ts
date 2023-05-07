import { styled } from 'styled-components'
import { BACKGROUND } from './colors'

export const Flex = styled.div<{ vertical?: boolean; spaceBetween?: boolean; fullHeight?: boolean }>`
  display: flex;
  justify-content: center;
  ${props => props.vertical && 'flex-direction: column;'}
  ${props => props.spaceBetween && 'justify-content: space-between;'}
  ${props => props.fullHeight && 'height: 100%;'}
`

export const Main = styled.main`
  height: 100%;
  overflow-y: scroll;
  padding: 1em 1em 0;
  box-sizing: border-box;
  background-color: ${BACKGROUND};
`
