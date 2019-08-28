import styled from 'styled-components'

export const Container = styled.div`
  .loading {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 80px;

    @media (max-width: 959px) {
      margin-top: 40px;
    }
  }

  .repos {
    display: flex;
    flex-direction: column;
    margin-top: 80px;

    @media (max-width: 959px) {
      margin-top: 40px;
    }

    .repo {
      background-color: rgba(255, 255, 255, 0.05);
      padding: 20px 30px;
      text-decoration: none;
      transition: 0.3s;

      @media (max-width: 959px) {
        padding: 20px;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.01);
      }

      &:not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .title {
        align-items: center;
        color: #fff;
        display: flex;
        font-weight: bold;
        font-size: 20px;

        @media (max-width: 959px) {
          font-size: 18px;
        }

        span {
          align-items: center;
          display: flex;
          font-size: 12px;
          line-height: 16px;
          margin-left: 20px;

          svg {
            fill: var(--primary-color);
            height: 16px;
            margin-right: 4px;
            width: 16px;
          }
        }
      }

      .description {
        color: rgba(255, 255, 255, 0.7);
        margin-top: 8px;

        @media (max-width: 959px) {
          line-height: 150%;
          font-size: 14px;
        }
      }
    }
  }

  .button-placeholder {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`
