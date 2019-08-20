import styled from 'styled-components'

export const Container = styled.div`
  #about-header {
    display: flex;
    justify-content: flex-end;
    position: relative;

    .title {
      bottom: 0;
      padding: 30px;
      position: absolute;
      right: 280px;

      .common-title {
        position: relative;
        z-index: 2;
      }

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
  }

  .common-text {
    margin-top: 80px;
  }

  .common-button {
    margin-top: 40px;
  }
`
