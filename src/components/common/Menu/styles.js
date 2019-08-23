import styled from 'styled-components'

export const Nav = styled.nav`
  align-items: center;
  display: flex;

  .nav-a {
    color: #fff;
    font-family: 'HelveticaNeue-CondensedBlack', sans-serif;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;

    &:hover:after {
      opacity: 1;
    }

    &:after {
      background-color: var(--primary-color);
      bottom: -6px;
      content: '';
      height: 2px;
      left: 50%;
      opacity: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: 0.3s;
      width: 30px;
    }

    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`
