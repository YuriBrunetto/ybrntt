import styled from 'styled-components'

export const Container = styled.div`
  #main {
    display: flex;
    min-height: calc(100vh - 120px - 100px);
  }

  .common-limiter {
    align-items: center;
    display: flex;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 64px;
      margin: 0 0 30px;

      span {
        color: $primary-color;
      }
    }

    h2 {
      color: rgba(255, 255, 255, 0.7);
      font-size: 24px;
      font-style: italic;
      font-weight: 300;
      line-height: 120%;
    }

    .common-button {
      margin-top: 30px;
    }
  }

  #footer {
    margin-top: 0;
  }
`
