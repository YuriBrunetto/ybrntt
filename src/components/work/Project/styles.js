import styled from 'styled-components'

export const ProjectLink = styled.a`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  overflow: hidden;

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

    .common-title {
      background-color: var(--primary-color);
      padding: 20px 30px 20px 40px;
    }

    .stack {
      background-color: var(--dark-color);
      color: var(--primary-color);
      font-size: 16px;
      font-style: italic;
      padding: 12px 30px 12px 40px;
    }

    .common-title,
    .stack {
      z-index: 10;
    }
  }

  img {
    transition: 0.3s;
    width: 100%;
    filter: grayscale(100%);
  }
`
