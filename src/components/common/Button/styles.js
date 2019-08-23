import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = () => `
  background-color: var(--primary-color);
  color: #fff;
  font-weight: bold;
  display: inline-block;
  height: 60px;
  line-height: 60px;
  padding: 0 26px;
  text-decoration: none;
  will-change: background-color;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6564c4;
  }
`

export const A = styled.a`
  ${Button}
`
export const LinkStyled = styled(Link)`
  ${Button}
`
