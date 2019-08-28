import styled from 'styled-components'

export const Nav = styled.nav`
  align-items: center;
  display: flex;

  @media (max-width: 959px) {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: var(--dark-color);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    z-index: 10;
    will-change: opacity, visibility;
    transition: 0.3s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  .nav-a {
    color: #fff;
    font-family: 'HelveticaNeue-CondensedBlack', sans-serif;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;

    @media (max-width: 959px) {
      font-size: 24px;
      padding: 12px;
    }

    @media (min-width: 960px) {
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
  }
`
