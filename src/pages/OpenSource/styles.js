import styled from 'styled-components'

export const Container = styled.div`
  .repos {
    display: flex;
    flex-direction: column;
    margin-top: 80px;

    .repo {
      background-color: rgba(0, 0, 0, 0.1);
      padding: 20px 30px;
      text-decoration: none;
      transition: 0.3s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.01);
      }

      &:not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }

      .title {
        align-items: center;
        color: #fff;
        display: flex;
        font-weight: bold;
        font-size: 20px;

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
        margin-top: 6px;
      }
    }
  }

  .button-placeholder {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`
