import styled from 'styled-components'

export const ProjectLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (min-width: 960px) {
    &:before {
      content: '';
      height: 100%;
      width: 100%;
      background-color: var(--primary-color);
      opacity: 0.6;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 3;
      transition: opacity 0.3s;
    }

    &:hover {
      &:before {
        opacity: 0;
      }

      img {
        filter: grayscale(0);
        transform: scale(1.1);
      }
    }
  }

  .text {
    align-items: flex-start;
    color: #fff;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 4;

    @media (max-width: 959px) {
      top: auto;
      bottom: 0;
      transform: unset;
    }

    .common-title {
      background-color: var(--primary-color);
      padding: 20px 30px 20px 40px;

      @media (max-width: 959px) {
        padding: 1.1rem 1.6rem 1.1rem 2.2rem;
        font-size: 18px;
      }
    }

    .stack {
      background-color: var(--dark-color);
      color: var(--primary-color);
      font-size: 16px;
      font-style: italic;
      padding: 12px 30px 12px 40px;

      @media (max-width: 959px) {
        padding: 0.8rem 1.6rem 0.8rem 2.2rem;
        font-size: 12px;
      }
    }

    .common-title,
    .stack {
      z-index: 10;
    }
  }

  img {
    width: 100%;

    @media (min-width: 960px) {
      transition: 0.3s;
      filter: grayscale(100%);
    }
  }
`
