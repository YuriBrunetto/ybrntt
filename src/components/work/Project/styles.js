import styled from 'styled-components'

export const ProjectLink = styled.a`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover {
    .content .text {
      padding-left: 130px;

      &:before {
        transform: scaleX(1);
      }
    }

    img {
      opacity: 1;
    }
  }

  .content {
    align-items: flex-start;
    color: #fff;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 4;

    .text {
      padding: 20px 40px 30px;
      position: relative;
      transition: 0.6s ease-in-out;

      &:before {
        background-color: var(--dark-color);
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transform: scaleX(0);
        transform-origin: 0% 50%;
        transition: 0.3s;
        width: 100%;
        z-index: 1;
      }

      .common-title,
      .stack {
        position: relative;
        z-index: 10;
      }

      .stack {
        color: rgba(255, 255, 255, 0.7);
        font-size: 12px;
        font-style: italic;
        margin-top: 6px;
      }
    }
  }

  img {
    opacity: 0.1;
    transition: 0.3s;
    width: 100%;
  }
`
