import styled from 'styled-components'

export const Container = styled.header`
  margin: 0 auto;
  max-width: 1366px;
  padding: 40px 0;
  width: 100%;

  @media (max-width: 959px) {
    padding: 24px 0;
    position: relative;
  }

  .wrap {
    align-items: center;
    display: flex;
    padding: 0 40px;
    justify-content: space-between;

    @media (max-width: 959px) {
      padding: 0 24px;
    }

    .logo {
      height: 40px;

      div,
      svg {
        height: 100%;
      }
    }

    .open-menu {
      height: 40px;
      width: 40px;
      color: #fff;
      font-size: 40px;

      @media (min-width: 960px) {
        display: none;
      }
    }
  }
`
