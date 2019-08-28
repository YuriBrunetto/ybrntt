import styled from 'styled-components'

export const Container = styled.div`
  .info {
    margin: 80px auto 0;
    height: 30vh;
    text-align: center;
    font-size: 20px;
    line-height: 150%;
    max-width: 400px;
    color: rgba(255, 255, 255, 0.7);

    @media (max-width: 959px) {
      margin-top: 40px;
    }

    .common-button {
      margin-top: 16px;

      @media (max-width: 959px) {
        font-size: 16px;
      }
    }

    .socials {
      padding-top: 0;
      justify-content: center;
    }
  }
`
