import styled from 'styled-components'

export const Container = styled.div`
  border-top: 1px solid $primary-color;
  display: flex;
  margin-top: 40px;

  .socials-a {
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    color: #fff;
    display: flex;
    height: 40px;
    justify-content: center;
    transition: 0.3s ease-in-out;
    width: 40px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
      color: $primary-color;
    }

    &:not(:first-child) {
      margin-left: 8px;
    }
  }
`
