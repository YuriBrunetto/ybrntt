import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 959px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }

  #main {
    display: flex;

    @media (max-width: 959px) {
      margin-bottom: unset;
    }

    @media (min-width: 960px) {
      min-height: calc(100vh - 120px - 100px);
    }
  }

  .common-limiter {
    align-items: center;
    display: flex;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 959px) {
      padding: 0 24px;
    }

    @media (max-width: 370px) {
      padding: 0 8px;
    }

    h1 {
      font-size: 64px;
      margin: 0 0 30px;

      @media (max-width: 959px) {
        font-size: 40px;
        margin-bottom: 16px;
      }

      span {
        color: var(--primary-color);
      }
    }

    h2 {
      color: rgba(255, 255, 255, 0.7);
      font-size: 24px;
      font-style: italic;
      font-weight: 300;
      line-height: 120%;
      max-width: 360px;

      @media (max-width: 959px) {
        font-size: 18px;
      }
    }

    .common-button {
      margin-top: 40px;
    }
  }

  #footer {
    margin-top: 0;
  }
`
