import styled from 'styled-components'

export const Container = styled.div`
  #about-header {
    display: flex;
    justify-content: flex-end;
    position: relative;
    min-height: 402px;

    @media (max-width: 959px) {
      flex-direction: column-reverse;
      min-height: unset;
    }

    img {
      width: 100%;
      max-width: 400px;
    }

    .title {
      display: none;

      @media (min-width: 960px) {
        display: unset;
        margin-top: 0;
        bottom: 0;
        padding: 30px;
        position: absolute;
        right: 280px;

        &:before {
          background-color: $dark-color;
          bottom: 0;
          content: '';
          height: 196px;
          position: absolute;
          right: 0;
          width: 50%;
          z-index: 1;
        }
      }

      .common-title {
        position: relative;
        z-index: 2;
        text-shadow: 0 5px 6px rgba(0, 0, 0, 0.5);
      }
    }
  }

  .common-text {
    margin-top: 80px;

    @media (max-width: 959px) {
      margin-top: 30px;
      max-width: 100%;
    }
  }

  .common-button {
    margin-top: 40px;
  }
`
